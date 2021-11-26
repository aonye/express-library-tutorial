// //Import the mongoose module
// var mongoose = require('mongoose');

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// //Require Mongoose
// var mongoose = require('mongoose');

// //Define a schema
// var Schema = mongoose.Schema;

// var SomeModelSchema = new Schema({
//     a_string: String,
//     a_date: Date
// });

// //working with related populations

// var mongoose = require('mongoose')
//     , Schema = mongoose.Schema

// var authorSchema = Schema({
//     name: String,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// var storySchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: 'Author' },
//     title: String
// });

// var Story = mongoose.model('Story', storySchema);
// var Author = mongoose.model('Author', authorSchema);

// // node populatedb "mongodb+srv://aonye:Lolllol1@cluster0.hkanh.mongodb.net/local_library?retryWrites=true&w=majority"