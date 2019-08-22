const db = require('../db');

async function createUser (req, res) {
  let newUser = req.body;
  try {
    let results = await db.createUser(newUser);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  post: createUser
};