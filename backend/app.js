//********************module importation**************************/
//import express module
const express = require("express");

//import body parser module
const bodyParser = require("body-parser");
//*********************Importation:mongoose***********************/
const mongoose = require("mongoose");
//footDB=>data base name
mongoose.connect("mongodb://127.0.0.1:27017/footDB");
//*********************express application************************/
//creates express application
const app = express();
//import b crypt (module de cryptage)
const bcrypt = require("bcrypt");
//*********************Models Importation*************************/
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");

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
// function generateId(T) {
//   let max;
//   if (T.length == 0) {
//     max = 0;
//   } else {
//     max = T[0].id;
//     for (let i = 0; i < T.length; i++) {
//       if (T[i].id > max) {
//         max = T[i].id;
//       }
//     }
//   }
//   return max + 1;
// }

//*********************business Logics****************************/.
//*********************business Logics signup user/.
app.post("/api/users/signUp", (req, res) => {
  //instructon
  console.log("here into signup", req.body);
  User.findOne({ email: req.body.email }).then((response) => {
    console.log("here response", response);
    if (!response) {
      bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log("Here crypted pwd", cryptedPwd);
        req.body.pwd = cryptedPwd;
        let user = new User(req.body);
        user.save();
        res.json({ isAdded: true });
      });
    } else {
      res.json({ isAdded: false });
    }
  });
});
//*********************business Logics login**************/.
app.post("/api/users/login", (req, res) => {
  console.log("here user , req.body");
  //check if user exist by email
  User.findOne({ email: req.body.email }).then((response) => {
    console.log("here response", response);
    if (!response) {
      //user does not exist by email
      res.json({ msg: "check your email" });
    } else {
      //user exist =>compaare pwds
      bcrypt.compare(req.body.pwd, response.pwd).then((cryptedResult) => {
        console.log("here cripted result", cryptedResult);
        if (!cryptedResult) {
          res.json({ msg: "check your pwd" });
        } else {
          res.json({ msg: "welcome", role: response.role });
        }
      });
    }
  });
});

//business Logics: add match
app.post("/api/match", (req, res) => {
  //instructon
  console.log("here into BL:Add Match", req.body);
  let match = new Match(req.body);
  match.save();
  res.json({ isAdded: true });
});
//business Logics: Edit match
app.put("/api/match", (req, res) => {
  //instruction
  console.log("here into BL:Edit Match", req.body);
  Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("here updateResponse", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ isEdited: "success" });
    } else {
      res.json({ isEdited: "Echec" });
    }
  });
});
//business Logics: get all match
app.get("/api/match", (req, res) => {
  //instruction
  console.log("here into BL:Get All Match");
  Match.find().then((docs) => {
    res.json({ matches: docs });
  });
});
// business Logics : delete match by ID
app.delete("/api/match/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete match By id", req.params.id);
  Match.deleteOne({ _id: req.params.id }).then((deleteResult) => {
    console.log("Here delete result", deleteResult);
    if (deleteResult.deletedCount == 1) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    }
  });
});

//business Logics : get match by id
app.get("/api/match/:id", (req, res) => {
  console.log("here get match By id", req.params.id);
  Match.findById(req.params.id).then((doc) => res.json({ match: doc }));
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
    }
  }
  res.json({ T: matches });
});
//player
//business Logics: add player
app.post("/api/players", (req, res) => {
  console.log("here add player", req.body);
  let playerObj = new Player(req.body);
  playerObj.save();
  res.json({ isAdded: true });
});
//business Logics: Edit player
app.put("/api/players", (req, res) => {
  //instruction
  console.log("here into BL:Edit player", req.body);
  Player.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("here updateResponse", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ isEdited: "success" });
    } else {
      res.json({ isEdited: "Echec" });
    }
  });
});
//business Logics: get all player
app.get("/api/players", (req, res) => {
  //instruction
  console.log("here into BL:Get All player");
  Player.find().then((doc) => {
    res.json({ players: doc });
  });
});
// business Logics : delete player by ID
app.delete("/api/players/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete player By id", req.params.id);
  Player.deleteOne({ _id: req.params.id }).then((deleteResult) => {
    console.log("Here delete result", deleteResult);
    if (deleteResult.deletedCount == 1) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    }
  });
});
//business Logics : get player by id
app.get("/api/players/:id", (req, res) => {
  console.log("here get player By id", req.params.id);
  Player.findById(req.params.id).then((doc) => {
    res.json({ players: doc });
  });
});

//team

//business Logics: add team
app.post("/api/teams", (req, res) => {
  console.log("here add team", req.body);
  let teamObj = new Team(req.body);
  teamObj.save();
  res.json({ teamIsAded: true });
});
//business Logics: Edit team
app.put("/api/teams", (req, res) => {
  //instruction
  console.log("here into BL:Edit team", req.body);
  Team.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("here updateResponse", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ isEdited: "success" });
    } else {
      res.json({ isEdited: "Echec" });
    }
  });
});
//business Logics: get all team
app.get("/api/teams", (req, res) => {
  //instruction
  console.log("here into BL:Get All team");
  Team.find().then((docs) => {
    res.json({ teams: docs });
  });
});
// business Logics : delete team by ID
app.delete("/api/teams/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete team By id", req.params.id);
  Team.deleteOne({ _id: req.params.id }).then((deleteResult) => {
    console.log("Here delete result", deleteResult);
    if (deleteResult.deletedCount == 1) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    }
  });
});
//business Logics : get team by id
app.get("/api/teams/:id", (req, res) => {
  console.log("here get team By id", req.params.id);
  Team.findById(req.params.id).then((doc) => {
    res.json({ teams: doc });
  });
});

//********************app exportation*****************************/
//make app importable
module.exports = app;
