var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Debtor = require('./models/debtor');
Creditor = require('./models/creditor');

//connecting to Mongoose
mongoose.connect('mongodb://localhost/who-owes-whom');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello World!');
});

//debtors
app.get('/api/debtors', function(req, res){
  Debtor.getDebtors(function(err, debtors){
    if(err){
      throw err;
    }
    res.json(debtors);
  });
});

app.get('/api/debtors/:_id', function(req, res){
  Debtor.getDebtorById(req.params._id, function(err, debtor){
    if(err){
      throw err;
    }
    res.json(debtor);
  });
});

app.post('/api/debtors', function(req, res){
  var debtor = req.body;
  Debtor.addDebtor(debtor, function(err, debtor){
    if(err){
      throw err;
    }
    res.json(debtor);
  });
});

app.put('/api/debtors/:_id', function(req, res){
  var id = req.params._id;
  var debtor = req.body;
  Debtor.updateDebtor(id, debtor, {}, function(err, debtor){
    if(err){
      throw err;
    }
    res.json(debtor);
  });
});

app.delete('/api/debtors/:_id', function(req, res){
  var id = req.params._id;
  Debtor.deleteDebtor(id, function(err, debtor){
    if(err){
      throw err;
    }
    res.json(debtor);
  });
});

//creditors
app.get('/api/creditors', function(req, res){
  Creditor.getCreditors(function(err, creditors){
    if(err){
      throw err;
    }
    res.json(creditors);
  });
});

app.get('/api/creditors/:_id', function(req, res){
  Creditor.getCreditorById(req.params._id, function(err, creditor){
    if(err){
      throw err;
    }
    res.json(creditor);
  });
});

app.post('/api/creditors', function(req, res){
  var creditor = req.body;
  Creditor.addCreditor(creditor, function(err, creditor){
    if(err){
      throw err;
    }
    res.json(creditor);
  });
});

app.put('/api/creditors/:_id', function(req, res){
  var id = req.params._id;
  var creditor = req.body;
  Creditor.addCreditor(id, creditor, {}, function(err, creditor){
    if(err){
      throw err;
    }
    res.json(creditor);
  });
});

app.delete('/api/creditors/:_id', function(req, res){
  var id = req.params._id;
  Creditor.deleteCreditor(id, function(err, creditor){
    if(err){
      throw err;
    }
    res.json(creditor);
  });
});

app.listen(3000);
console.log('Running on port 3000...');
