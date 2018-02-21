const mongoose = require('mongoose');



/**
 * Represents a collection
 * @class
 */
module.exports = class Model {



   /**
    * Builds a new model
    * @constructor
    * @param {String} name                   The model unique name
    * @param {Object|mongoose.Schema} schema The schema that will be applied into mongoose
    */
   constructor(name, schema) {
      if(!name || typeof name !== 'string')
         throw new TypeError('\"name\" must be a not-empty string');

      if(!schema || typeof schema !== 'object')
         throw new TypeError('\"schema\" must be an object');

      this._name = name;
      this._schema = schema;
   }

   
   apply(connection){
      if(!(connection instanceof mongoose.Connection))
         throw new TypeError('\"connection\" must be a mongoose.Connection instance');

      connection.model(this._name, this._schema);
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
