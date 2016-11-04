const {ObjectID} =require('mongodb');

const {mongoose} =require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '581ca582a6b4a7ee96e3449411';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// user.findById  

var id = '581c84d515bc53a28fd9836b';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));