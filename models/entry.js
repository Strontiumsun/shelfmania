const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    username: { type: String },
    title: { type: String, required: true },
    authors: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    googleId: { type: String, required: true, unique: true }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;