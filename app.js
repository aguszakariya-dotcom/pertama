// const chalk = require('chalk');
const chalkAnimation = require('chalk-animation')
const rainbow = chalkAnimation.rainbow('Terhubung ke Database & server pada port : 3300'); // Animation starts
// ======================================================/
const createError = require('http-errors')
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser')
const logger = require('morgan');
// library ==========================================/
var flash = require('express-flash');
var session = require('express-session');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
// view Engine setup ==========================================/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// ============================/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ===============/
app.use(session({
    cookie: {
        maxAge: 6000
    },
    store: new session.MemoryStore,
    
    resave: true,
    saveUninitalized: true,
    // secret: 'secret'
}))

app.use(flash())

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
// error handler ===========================================/
app.use(function(req, res, next) {
    next(createError(404));
})

app.use(function(err, req, res, next) {
    // set local, ketika error terjadi
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render error di halaman
    res.status(err.status || 500);
    res.render('error');
})

module.exports = app;






// halaman yg di sidebar
// app.get('/', (req, res)=>{
//     res.render('index', {nama: 'agus zakariya', title: 'Home | Database'})
// })
// app.get('/dNota', (req, res)=>{
//     res.render('nota.ejs', {title: 'Nota | Database'})
// })
// app.get('/dSample', (req, res)=>{
//     res.render('dataSample', {title: 'Sample | Database'})
// })
// app.get('/dProduksi', (req, res)=>{
//     res.render('dataProduksi', {title: 'Produksi | Database'})
    
// })

// app.get('/home', (req, res)=>{
//     res.render('home', {title: 'Home | Database'})
// })
// app.get('/dPrint', (req, res)=>{
//     res.render('print')
// })
// batas sidebar


//driver mysql
// const mysql = require("mysql");
// //load konfigurasi database
// const dbConfig = require("./mesin/dbConfig");
// //==============================================================================================================

// // buat koneksi ke database
// const connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// });
//==============================================================================================================

// port untuk server lokal

// app.use('/', (req, res)=>{
//     res.status(404)
//     res.send('halaman tidak ditemukan')
// })

// port untuk server lokal
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Server berjalan pada Port : ${PORT}.`);
});
