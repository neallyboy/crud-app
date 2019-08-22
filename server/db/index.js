const { Pool } = require('pg');

const pool = new Pool({
  user: 'nealmiran',
  host: 'localhost',
  database: 'emr_db',
  password: '',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
    console.log('Connected to PostgreSQL')
});

let emrdb = {};

//Login
emrdb.login = (loginDetails) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE username = ?', [loginDetails.user], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//Create user
emrdb.createUser = (newUser) => {
  const sqlString = 'INSERT INTO users (username, password) VALUES ($1, $2)';
  return new Promise((resolve, reject) => {
      pool.query(sqlString, [
        newUser.username,
        newUser.password,
      ], (err, results) => {
          if (err) {
              return reject(err);
          }
          return resolve(results);
      })
  })
}

module.exports = emrdb;