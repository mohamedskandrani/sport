// import mongoose module
const mongoose=require("mongoose");
//create team schema 
const teamSchema=mongoose.Schema({
    name:String,
    owner:String,
    foundation:String,
    
});
//affect name to teamSchema
const team=mongoose.model("Team",teamSchema);
//make model exportable
module.exports=team;