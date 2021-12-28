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

//load konfigurasi database
// const dbConfig = require("./mesin/dbConfig");
//==============================================================================================================

// buat koneksi ke database
let mysql = require("mysql");
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sovana'
});
//==============================================================================================================

// buka koneksi ke dbms
connection.connect(error => {
    if (error) throw error;
    console.log(chalkAnimation.rainbow("Anda Berhasil, Horeeee.."));
});

module.exports = connection;
