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

  // db.collection("Todos").find().count().then((count) => {
  //   console.log("Todos count:",count);
  // }, (error) => {
  //   console.log("Unable to fetch todos", error);
  // })

  db.collection("Users").find({name: "Davey"}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 3));
  }, (error) => {
    console.log("Unable to fetch todos", error);
  })
  //db.close();
});
