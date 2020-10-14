const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const moviesAPI = require('./routes/movies')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = process.env.DB;

// Database Name
const dbName = 'test';

moviesAPI(app)

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT} 
  http://localhost:${process.env.PORT}`)
})