const MongoClient = require('mongodb').MongoClient; // 'mongodb' here is a driver library
const ObjectID = require('mongodb').ObjectID; // get the objectid property

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to mongodb');
    }

    console.log('Connected to mongodb');

    // create a collection(or add to existing collection/table) and insert one
    /*
    db.collection('Todos').insertOne({
        text: "Something to do",
        completed: false
    }, (err, result) => {
        if (err){
            return console.log('Unable to insert todo: ', err);
        }
        console.log(JSON.stringify(result.ops));
    });
    
    db.collection('Users').insertOne({
        name: "Shubham",
        age: 21,
        location: 'New Delhi'
    }, (err, result) => {
        if (err){
            return console.log('Unable to insert user: ', err);
        }
        console.log(JSON.stringify(result.ops));
    });
    */
    
    // find
    /*
    db.collection('Todos').find({
        _id: new ObjectID('5aeeccef6750b34300855b59')
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to find todos", err);
    });
    */

    // delete

    //delete many
    /*db.collection('Todos').deleteMany({completed: true}).then((result) => {
        console.log("deleted: ", result);
    });

    //delete one
    db.collection('Todos').deleteOne({completed: true}).then((result) => {
        console.log("deleted: ", result);
    });

    //find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log("deleted: ", result);
    });
    */

    // update
    // find one and update
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5aeee472812b834978886f90')
        }, 
        {
            $set: {
            completed: true   // look at the mongo update operators docs for $inc etc
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log("updated: ", result);
    });

    db.close();
});