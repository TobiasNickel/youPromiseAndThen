// Promise

// Problems
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Something = mongoose.model('something', {
    name: String,
    props: Object
});

var name = parseInt(Math.random() * 100000000).toString(16);


// following code might be in a controller-handler
var newItem = new Something({
    name: name,
    props: {}
});
// might be anything, i.e.: test permission, prepare transaction
newItem.save().then(function() {
    console.log('saved');
    // here might be some condition
    Something.find({
        name: name
    }).then(function(items) {
        return Something.update({
            name: name
        }, {
            $set: {
                "props.keys": {
                    $test: 'break'
                }
            }
        });
    });
}).then(function() {
    // a response might be send
}).catch(function(err) {
    console.log('yes, catched');
    console.log(err.stack)
})