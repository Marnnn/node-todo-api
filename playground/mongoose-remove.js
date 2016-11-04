const {ObjectID} =require('mongodb');

const {mongoose} =require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('581cd64f2afbae0a151b719d').then((todo) => {
    console.log(todo);
});