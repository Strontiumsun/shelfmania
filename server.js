var express = require('express');
var mongoose = require("mongoose");

var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/shelfmania', { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
;

app.listen(PORT, function () {
    console.log('App listening on PORT:' + PORT);
});

