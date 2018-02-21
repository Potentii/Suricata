const mongoose = require('mongoose');
const models_store = require('../stores/models');



module.exports = class Scope {




   constructor(name, connection, models) {
      if(!name){
         throw new Error('The scope name must be set');
      } else if(typeof name === 'string'){
         if(!name.length)
            throw new Error('The scope name must not be empty');
      } else if(typeof name !== 'symbol'){
         throw new TypeError('The scope name must be a string or a symbol');
      }

      if(!(connection instanceof mongoose.Connection))
         throw new TypeError('The scope connection must be a mongoose.Connection instance');

      if(!Array.isArray(models))
         throw new TypeError('The scope models must be an array');

      if(!models.every(m => typeof m === 'string' || m instanceof Model))
         throw new TypeError('The scope models must be an array of strings or suricata.Model instances');

      this._name = name;
      this._connection = connection;
      this._models = models.map(m => {
         const model = typeof m === 'string' ? models_store.get(m) : m;
         if(!model)
            throw new Error('Model \"' + m + '\" doesn\'t exist');
         return model;
      });
   }


   apply(){
      for(let model of this._models){
         this._connection.model(model.name, model.schema);
      }
   }

   refresh(){

   }

   get name(){
      return this._name;
   }

   get schema(){
      return this._schema;
   }

   set schema(schema){
      if(!schema || typeof schema !== 'object')
         throw new TypeError('\"schema\" must be an object');

      this._schema = schema;
   }

}
