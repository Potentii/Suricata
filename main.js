#!/usr/bin/env node
'use strict';

/**
 * Suricata
 * @author Guilherme Reginaldo Ruella <potentii@gmail.com>
 * @license [License]{@link LICENSE.txt}
 */
module.exports = require('./libs/suricata');

// TODO remove unused functions
/*
Helps you to setup mongoose with an easy and simple API, avoiding boilerplates
- model synchronization
- multiple connections
- scoped models



Model {
   model: Retrieves the mongoose model
   name:
   schema: Retrieves the Schema object that defines the model
   updateModel: Refreshes the model using the internal schema object
}

suricata.model('model-name', {
   _id: xxx
});

suricata.models['model-name']
suricata.models('model-name')



Scope {
   name:
   connection:
   models:
}
suricata.scope('scope-name', {
   user: xxx,
   pass: xxx
});

suricata.scopes['connection-name']
suricata.scopes('connection-name')

suricata.scopes('scope-name').models('model-name1')



start()?????????????????

*/
