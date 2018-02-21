const models = require('./stores/models');
const scopes = require('./stores/scopes');



class Suricata{

   constructor(){

   }



   model(name, schema){
      const model = new Model(name, schema);
      models.add(new Model(name, schema));
   }

   scope(name, connection, models){
      const scope = new Scope(name, connection, models);
      scopes.add(scope);
   }



   models(name){
      return models.get(name);
   }

   scopes(name){
      return scopes.get(name);
   }


   


   get mongoose(){

   }
}


module.exports = new Suricata();
