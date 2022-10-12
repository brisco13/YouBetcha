const db = require("../config/connection");
const { User, Bets, Reaction } = require("../models");

const userData = require("./userData.json");
const betsData = require("./betsData.json");

db.once("open", async () => {
  await user.deleteMany({});
  await bets.deleteMany({});

  const users = await User.insertMany(userData);
  const bets = await Bets.insertMany(betsData);

  console.log("Users seeded!");
  process.exit(0);
});
