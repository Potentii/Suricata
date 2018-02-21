
const models = [];

function add(model){
   if(models.some(m => m.name === model.name))
      throw new Error('The model \"' + model.name + '\" has already been added');

   models.push(model);
}

function get(name){
   return models.find(m => m.name === name);
}


module.exports = { add, get };
