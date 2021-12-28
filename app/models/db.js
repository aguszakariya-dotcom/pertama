
const chalk = require ('chalk')
const chalkAnimation = require ('chalk-animation')

//driver mysql
const mysql = require("mysql");
//load konfigurasi database
const dbConfig = require("../config/dbConfig.js");
//==============================================================================================================

// buat koneksi ke database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
//==============================================================================================================
const rainbow = chalkAnimation.rainbow("Anda Berhasil terhubung pada Database, pada port 3300")
setTimeout(() => {
  rainbow.stop(); // Animation stops
}, 1000);

setTimeout(() => {
  rainbow.start(); // Animation resumes
}, 2000);
// buka koneksi ke dbms
connection.connect(error => {
  if (error) throw error;
  console.log(chalkAnimation.rainbow("terhubung pada Database..."));
});

module.exports = connection;
