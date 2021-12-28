// const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const rainbow = chalkAnimation.rainbow('Terhubung ke Database & server pada port : 3300'); // Animation starts
const express = require('express');
const ejs = require ('ejs')
const app = express();
app.set('view engine', 'ejs')
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);
app.get('/', (req, res)=>{
    res.render('index', {nama: 'saya ada disini', title: 'Home | Database'})
})


// halaman yg di sidebar
app.get('/', (req, res)=>{
    res.render('index', {nama: 'agus zakariya', title: 'Home | Database'})
})
app.get('/dNota', (req, res)=>{
    res.render('nota.ejs', {title: 'Nota | Database'})
})
app.get('/dSample', (req, res)=>{
    res.render('dataSample', {title: 'Sample | Database'})
})
app.get('/dProduksi', (req, res)=>{
    res.render('dataProduksi', {title: 'Produksi | Database'})
    
})

app.get('/home', (req, res)=>{
    res.render('home', {title: 'Home | Database'})
})
app.get('/dPrint', (req, res)=>{
    res.render('print')
})
// batas sidebar


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

// port untuk server lokal


// require("./mesin/produksiRoutes")(app);
// port untuk server lokal
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(chalkAnimation.rainbow(`Server berjalan pada Port : ${PORT}.`));
});
