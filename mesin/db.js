// const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const rainbow = chalkAnimation.rainbow('Terhubung ke Database & server pada port : 3300'); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);

setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);

//driver mysql
const mysql = require("mysql");
//load konfigurasi database
const dbConfig = require("./mesin/dbConfig");
//==============================================================================================================

// buat koneksi ke database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
//==============================================================================================================

// buka koneksi ke dbms
connection.connect(error => {
    if (error) throw error;
    console.log(chalkAnimation.rainbow("Anda Berhasil, Horeeee.."));
});

module.exports = connection;
