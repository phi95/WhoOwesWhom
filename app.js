var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'))
app.use(bodyParser.json());

Transaction = require('./models/transaction');
Person = require('./models/person');

//connecting to Mongoose
mongoose.connect('mongodb://localhost/who-owes-whom');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello World!');
});

//transaction
app.get('/api/transactions', function(req, res){
  Transaction.getTransactions(function(err, transactions){
    if(err){
      throw err;
    }
    res.json(transactions);
  });
});

app.get('/api/transactions/id/:_id', function(req, res){
  Transaction.getTransactionById(req.params._id, function(err, transaction){
    if(err){
      throw err;
    }
    res.json(transaction);
  });
});

app.get('/api/transactions/name/:_personId', function(req, res){
  var personId = req.params._personId;
  Transaction.getTransactionsByPersonId(personId, function(err, transactions){
    if(err){
      throw err;
    }
    res.json(transactions);
  });
});

app.post('/api/transactions', function(req, res){
  var transaction = req.body;
  Transaction.addTransaction(transaction, function(err, transaction){
    if(err){
      throw err;
    }
    res.json(transaction);
  });
});

app.put('/api/transactions/id/:_id', function(req, res){
  var id = req.params._id;
  var transaction = req.body;
  Transaction.updateTransaction(id, transaction, {}, function(err, transaction){
    if(err){
      throw err;
    }
    res.json(transaction);
  });
});

app.delete('/api/transactions/id/:_id', function(req, res){
  var id = req.params._id;
  Transaction.deleteTransaction(id, function(err, transaction){
    if(err){
      throw err;
    }
    res.json(transaction);
  });
});

//persons
app.get('/api/persons', function(req, res){
  Person.getPersons(function(err, persons){
    if(err){
      throw err;
    }
    res.json(persons);
  });
});

app.get('/api/persons/:_id', function(req, res){
  Person.getPersonById(req.params._id, function(err, person){
    if(err){
      throw err;
    }
    res.json(person);
  });
});

app.post('/api/persons', function(req, res){
  var person = req.body;
  Person.addPerson(person, function(err, person){
    if(err){
      throw err;
    }
    res.json(person);
  });
});

app.put('/api/persons/:_id', function(req, res){
  var id = req.params._id;
  var person = req.body;
  Person.updatePerson(id, person, {}, function(err, person){
    if(err){
      throw err;
    }
    res.json(person);
  });
});

app.delete('/api/persons/:_id', function(req, res){
  var id = req.params._id;
  Person.deletePerson(id, function(err, person){
    if(err){
      throw err;
    }
    res.json(person);
  });
});

app.listen(3000);
console.log('Running on port 3000...');
