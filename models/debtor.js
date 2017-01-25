var mongoose = require('mongoose');

//debtor schema
var debtorSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  }
});

var Debtor = module.exports = mongoose.model('Debtor', debtorSchema);

//get debtors
module.exports.getDebtors = function(callback, limit){
  Debtor.find(callback).limit(limit);
}

module.exports.getDebtorById = function(id, callback){
  Debtor.findById(id, callback);
}

//add debtor
module.exports.addDebtor = function(debtor, callback){
  Debtor.create(debtor, callback);
}

//update debtor
module.exports.updateDebtor = function(id, debtor, options, callback){
  var query = {_id: id};
  var update = {
    name: debtor.name,
    amount: debtor.amount
  };
  Debtor.findOneAndUpdate(query, update, options, callback);
}

//delete debtor
module.exports.deleteDebtor = function(id, callback){
  var query = {_id: id};
  Debtor.remove(query, callback);
}
