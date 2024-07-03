// import mongoose module
const mongoose=require("mongoose");
//create match schema 
const matchSchema=mongoose.Schema({
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String,
});
//affect name to matchSchema
const match=mongoose.model("Match",matchSchema);
//make model exportable
module.exports=match;