// import mongoose module
const mongoose = require("mongoose");
//create player schema 
const playerSchema = mongoose.Schema({
    name: String,
    nbr: Number,
    age: Number,
    position: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"

    }
});
//affect name to playerSchema
const player = mongoose.model("Player", playerSchema);
//make model exportable
module.exports = player;