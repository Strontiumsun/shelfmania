var express = require('express');
var mongoose = require("mongoose");
var routes = require("./routes")
var app = express();

var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shelfmania', { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
;

app.use(routes);

app.listen(PORT, function () {
    console.log('App listening on PORT:' + PORT);
});

