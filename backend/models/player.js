// import mongoose module
const mongoose=require("mongoose");
//create player schema 
const playerSchema=mongoose.Schema({
    name:String,
    nbr:Number,
    age:Number,
    position:String,
});
//affect name to playerSchema
const player=mongoose.model("Player",playerSchema);
//make model exportable
module.exports=player;