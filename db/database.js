// import sqlite3 // verbose
const sqlite3 = require('sqlite3').verbose();

// TCP/IP To Database 
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Successfully Connected To Election Database.');
});

module.exports = db;