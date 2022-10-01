const db = require('../config/connection');
const { User } = require('../models');
// make dummy data for users, bets, comments, reactions all tied to users?
// or make a bunch of tables for each type - this is probably cleaner

const seedData = require('./seedData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const userData = await User.insertMany(seedData);

  console.log('Data seeded!');
  process.exit(0);
});
