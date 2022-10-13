const db = require("../config/connection");
const { User, Bet, Reaction } = require("../models");
const process = require("process");

const userData = require("./userData.json");
const betsData = require("./betsData.json");

db.once("open", async () => {
  // await User.deleteMany({});
  await Bet.deleteMany({});

  const users = await User.insertMany(userData);
  const bets = await Bet.insertMany(betsData);

  console.log("Users seeded and Bets!");
  process.exit(0);
});
