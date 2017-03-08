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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58bdb55e88f1c321118c44bc")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //    console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('58bdb6ff88f1c321118c45a4')},
    {
      $set: {name: "Gooberhead"},
      $inc: {age: 1}
    },
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });

  //db.close();
});
