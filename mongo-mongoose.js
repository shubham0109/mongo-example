const mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// inserting data
/*
var newTodo = new Todo({
    text: 'Feed the rabbit'
});
newTodo.save().then((docs) => {
    console.log(docs);
}, (e) => {
    console.log("Error: ",e);
});
*/

/*
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'shubham.kumar0109@gmail.com'
});
newUser.save().then((docs) => {
    console.log(docs);
}, (e) => {
    console.log("Error: ",e);
});
*/

// Mongoose Queries

/*
Todo.find({
    _id: '5aef1aa8a88df30f30ba4378'
}).then((docs) => {
    console.log({docs});
}, (e) => {
    console.log(e);
});

Todo.findOne() // finds the first one
Todo.findById('5aef1aa8a88df30f30ba4378').then(...) // find by id
*/

/* delete items
Todo.remove({}).then((result) => {    // removes everything from the db 
    console.log(result);
}).catch(err => console.log(err));

Todo.findByIdAndRemove('id').then(....) // find id and remove
Todo.findOneAndRemove({_id: 'jggk'}).then  // find one and remove
*/

/* Updating data
Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then()  // finds the id and updates it's data with data in body variable
*/