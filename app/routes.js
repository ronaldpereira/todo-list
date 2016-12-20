var Todo = require('./models/todo');
var User = require('./models/user');

module.exports = function(app) {

    // get all users
    app.get('/api/users', function(req, res) {
        // use mongoose to get all users in the database
        User.find(function(err, users) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(users); // return all users in JSON format
        });
    });

    // create user and send back all users after creation
    app.post('/api/users', function(req, res) {
        User.create({
            username : req.body.text,
            email    : req.body.email,
            password : req.body.password
        }, function(err, user) {
            if (err)
                res.send(err);

            // get and return all the users after you create another
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users); // return all users in JSON format
            });
        });
    });

    // get all todos
    app.get('/api/todos', function(req, res) {
        // use mongoose to get all todos in the database
        Todo.find(function(err, todos) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(todos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos); // return all todos in JSON format
            });
        });
    });

    // updates an existing todo
    app.put('/api/todos/:todo_id', function(req, res) {
        Todo.update({
            text : req.body.text,
            done : req.body.done
        }, function(err, todo) {
            console.log(err);
            if (err)
                res.send(err);

            // get and return all the todos after you update another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos); // return all todos in JSON format
            });
        });
    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos); // return all todos in JSON format
            });
        });
    });
};
