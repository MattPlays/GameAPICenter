const GameAPICenter = require("./GameAPICenter");
const CSGOAPI = new GameAPICenter.HyperScapeAPI("e65fcc64-7749-4845-930d-fc95a1866b2d");
CSGOAPI.GetPlayerProfile("uplay", "TheInvictusTV").then(console.log)