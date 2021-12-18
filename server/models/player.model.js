const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a full name."],
        minlength: [3, "Players full name must be more than 3 characters long."],
    },
    preferredPosition: {
        type: String,
    },
    gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
    gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
    gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Player", PlayerSchema);
