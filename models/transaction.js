var mongoose = require('mongoose');

//transaction schema
var transactionSchema = mongoose.Schema({
  id:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  },
  description:{
    type: String
  },
  time:{
    type:Date,
    default: Date.now
  }
});

var Transaction = module.exports = mongoose.model('Transactions', transactionSchema);

//get transaction
module.exports.getTransactions = function(callback, limit){
  Transaction.find(callback).limit(limit);
}

module.exports.getTransactionsByPersonId = function(personId, callback){
  var query = {
    id: personId
  };
  Transaction.find(query, callback);
}

module.exports.getTransactionById = function(id, callback){
  Transaction.findById(id, callback);
}



//add transaction
module.exports.addTransaction = function(transaction, callback){
  Transaction.create(transaction, callback);
}

//update transaction
module.exports.updateTransaction = function(id, transaction, options, callback){
  var query = {_id: id};
  var update = {
    id: transaction.id,
    amount: transaction.amount,
    description: transaction.description
  };
  Transaction.findOneAndUpdate(query, update, options, callback);
}

//delete transaction
module.exports.deleteTransaction = function(id, callback){
  var query = {_id: id};
  Transaction.remove(query, callback);
}
