const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    authors: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;