// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('581c72672afbae0a151b719a')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('581bf62c7518b788ee3b9943')
    }, {
        $set: {
            name: 'Pedro'
        },
        $inc: {
            age: 10
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    

    // db.close()
});