//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Davey', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Davey",
  //   age: 53,
  //   location: "Cary NC"
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user', error)
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
