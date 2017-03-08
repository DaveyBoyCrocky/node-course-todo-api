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

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then( (deletedDoc) => {
  //   console.log(deletedDoc);
  // });

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Boris'}).then( (result) => {
  //   console.log(result);
  // });

  // // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58b9c2f36b29824867ca47f4')}).then( (deletedDoc) => {
    console.log(deletedDoc);
  });


  //db.close();
});
