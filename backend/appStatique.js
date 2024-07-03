//********************module importation*************************/
//import express module
const express = require("express");

//import body parser module
const bodyParser = require("body-parser");
//*********************Importation:mongoose*************************/
const mongoose=require("mongoose");
//footDB=>data base name
mongoose.connect('mongodb://127.0.0.1:27017/footDB');
//*********************express application************************/
//creates express application
const app = express();
//*********************Models Importation*************************/
const Match = require("./models/match")
const Player = require("./models/player")
const Team = require("./models/team")


//*********************app configuaration*************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Security configuration

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Fake datebase
let matchesTab = [
  { id: 1, scoreOne: 2, scoreTwo: 2, teamOne: "psg", teamTwo: 5 },
  { id: 2, scoreOne: 3, scoreTwo: 1, teamOne: "real", teamTwo: 4 },
  { id: 3, scoreOne: 1, scoreTwo: 3, teamOne: "betis", teamTwo: 1 },
];
let playersTab = [
  { id: 1, name: "ali", nbr: 2, age: 2, position: 5 },
  { id: 2, name: "salah", nbr: 2, age: 2, position: 5 },
  { id: 3, name: "houda", nbr: 2, age: 2, position: 51 },
];
let teamsTab = [
  { id: 1, name: "usm", owner: 2, foundation: 2 },
  { id: 2, name: "real", owner: 2, foundation: 22 },
  { id: 3, name: "ca", owner: 2, foundation: 21 },
];
function generateId(T) {
  let max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 0; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max + 1;
}

//*********************business Logics ****************************/
//business Logics: add match
app.post("/api/match", (req, res) => {
  //instructon
  console.log("here into BL:Add Match", req.body);
  req.body.id = generateId(matchesTab);
  matchesTab.push(req.body);
  res.json({ isAdded: true });
});
//business Logics: Edit match
app.put("/api/match", (req, res) => {
  //instruction
  console.log("here into BL:Edit Match", req.body);
  for (let i = 0; i < matchesTab.length; i++) {
    if (matchesTab[i].id == req.body.id) {
      matchesTab[i] = req.body;
      break;
    }
  }
  res.json({ isEdited: "success" });
});
//business Logics: get all match
app.get("/api/match", (req, res) => {
  //instruction
  console.log("here into BL:Get All Match");
  res.json({ matches: matchesTab });
});
// business Logics : delete match by ID
app.delete("/api/match/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete match By id", req.params.id);
  for (let i = 0; i < matchesTab.length; i++) {
    if (matchesTab[i].id == req.params.id) {
      matchesTab.splice(i, 1);
      break;
    }
  }
  res.json({ isDeleted: true });
});
//business Logics : get match by id
app.get("/api/match/:id", (req, res) => {
  console.log("here get match By id", req.params.id);
  for (let i = 0; i < matchesTab.length; i++) {
    if (matchesTab[i].id == req.params.id) {
      res.json({ match: matchesTab[i] });
      break;
    }
  }
});
app.post("/api/match/search", (req, res) => {
  //instructon
  console.log("here into BL:Add Match", req.body);
  let matches = [];
  for (let i = 0; i < matchesTab.length; i++) {
    if (
      matchesTab[i].scoreOne == req.body.score1 ||
      matchesTab[i].scoreTwo == req.body.score2
    ) {
      matches.push(matchesTab[i]);
    }}
res.json({ T: matches });
});
//player
//business Logics: add player
app.post("/api/players", (req, res) => {
  console.log("here add player",req.body);
  req.body.id=generateId(playersTab);
  playersTab.push(req.body);
  res.json({isAdded:true})
});
//business Logics: Edit player
app.put("/api/players", (req, res) => {
  //instruction
  console.log("here into BL:Edit player",req.body);
  for (let i = 0; i < playersTab.length; i++) {
    if (playersTab[i].id==req.body.id) {
      playersTab[i]=req.body;
      break
}
    }
    res.json({isEdited : "success"});
});
//business Logics: get all player
app.get("/api/players", (req, res) => {
  //instruction
  console.log("here into BL:Get All player");
  res.json({ players: playersTab });
});
// business Logics : delete player by ID
app.delete("/api/players/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete player By id", req.params.id);
  for (let i = 0; i < playersTab.length; i++) {
    if (playersTab[i].id == req.params.id) {
      playersTab.splice(i, 1);
      break;
    }
  }
  res.json({ isDeleted: true });
});
//business Logics : get player by id
app.get("/api/players/:id", (req, res) => {
  console.log("here get player By id", req.params.id);
  for (let i = 0; i < playersTab.length; i++) {
    if (playersTab[i].id == req.params.id) {
      res.json({ players: playersTab[i] });
    }
  }
});

//team

//business Logics: add team
app.post("/api/teams", (req, res) => {
  console.log("here add team",req.body);
  req.body.id = generateId(teamsTab);  
  teamsTab.push(req.body);
  res.json({teamIsAded:true}) 
});
//business Logics: Edit team
app.put("/api/teams", (req, res) => {
  //instruction
  console.log("here into BL:Edit team",req.body);
  for (let i = 0; i < teamsTab.length; i++) {
    if (teamsTab[i].id==req.body.id) {
      teamsTab[i]=req.body;
      
    }
    
  }
  res.json({isEdited:"success"});
});
//business Logics: get all team
app.get("/api/teams", (req, res) => {
  //instruction
  console.log("here into BL:Get All team");
  res.json({ teams: teamsTab });
});
// business Logics : delete team by ID
app.delete("/api/teams/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete team By id");
});
//business Logics : get team by id
app.get("/api/teams/:id", (req, res) => {
  console.log("here get team By id", req.params.id);
  for (let i = 0; i < teamsTab.length; i++) {
    if (teamsTab[i].id == req.params.id) {
      res.json({ teams: teamsTab[i] });
      break;
    }
  }
});

//********************app exportation*****************************/
//make app importable
module.exports = app;
