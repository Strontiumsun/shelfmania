const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    username: { type: String },
    title: { type: String },
    authors: { type: [String] },
    image: { type: String },
    link: { type: String },
    googleId: { type: String, required: true, unique: true }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;