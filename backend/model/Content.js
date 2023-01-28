const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
    },
    overview: {
        type: String,
        required: [true, "Please add a description"],
    },
    url: {
        type: String,
    },
    rating: {
        type: Number,
        required: [true, "Please add a rating"],
    },
    genres: [
        {
            type: String,
            required: [true, "Please add a genre"],
        }
    ],
    votes: {
        type: Number,
        required: [true, "Please add a number of votes"],
    },
    cast : [
        {
            type: String,
            required: [true, "Please add a cast"],
        }
    ]
});

module.exports = mongoose.model("content", ContentSchema);