var mongoose = require('mongoose');

//creditor schema
var creditorSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  }
});

var Creditor = module.exports = mongoose.model('Creditor', creditorSchema);

//get creditor
module.exports.getCreditors = function(callback, limit){
  Creditor.find(callback).limit(limit);
}

module.exports.getCreditorById = function(id, callback){
  Creditor.findById(id, callback);
}

//add creditor
module.exports.addCreditor = function(creditor, callback){
  Creditor.create(creditor, callback);
}

//update creditor
module.exports.updateCreditor = function(id, creditor, options, callback){
  var query = {_id: id};
  var update = {
    name: creditor.name,
    amount: creditor.amount
  };
  Creditor.findOneAndUpdate(query, update, options, callback);
}

//delete creditor
module.exports.deleteCreditor = function(id, callback){
  var query = {_id: id};
  Creditor.remove(query, callback);
}
