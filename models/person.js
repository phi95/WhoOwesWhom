var mongoose = require('mongoose');

//person schema
var personSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  }
});

var Person = module.exports = mongoose.model('Persons', personSchema);

//get person
module.exports.getPersons = function(callback, limit){
  Person.find(callback).limit(limit);
}

module.exports.getPersonById = function(id, callback){
  Person.findById(id, callback);
}

//add person
module.exports.addPerson = function(person, callback){
  Person.create(person, callback);
}

//update person
module.exports.updatePerson = function(id, person, options, callback){
  var query = {_id: id};
  var update = {
    name: person.name,
    amount: person.amount
  };
  Person.findOneAndUpdate(query, update, options, callback);
}

//delete person
module.exports.deletePerson = function(id, callback){
  var query = {_id: id};
  Person.remove(query, callback);
}
