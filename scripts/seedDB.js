const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shelfmania"
);

const entrySeed = [{
    username: "Stront",
    title: "Martian Time-Slip",
    authors: ["Philip K Dick"],
    images: "https://books.google.com/books/content/images/frontcover/3gH8AwAAQBAJ?fife=w200-h300",
    link: "https://play.google.com/store/books/details?id=3gH8AwAAQBAJ&source=gbs_api"
}];

db.Entry.remove({})
    .then(() => db.Entry.collection.insertMany(entrySeed)).then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1);
    });
