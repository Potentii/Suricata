
const scopes = [];

function add(scope){
   if(scopes.some(s => s.name === scope.name))
      throw new Error('The scope \"' + scope.name + '\" has already been added');

   scopes.push(scope);
}

function get(name){
   return scopes.find(s => s.name === name);
}


module.exports = { add, get };
