
const chalk = require ('chalk')

const express = require('express');
const expressAsyncHandler = require('express-async-handler')
const bodyParser = require('body-parser')
const app = express();

const ejs = require ('ejs')
// halaman root
app.use(bodyParser.json());
app.set('view engine', 'ejs')
// halaman yg di sidebar
app.get('/', (req, res)=>{
    res.render('index', {nama: 'agus zakariya', title: 'Home | Database'})
})
app.get('/nota', (req, res)=>{
    res.render('nota.ejs', {title: 'Nota | Database'})
})
app.get('/sample', (req, res)=>{
    res.render('dataSample', {title: 'Sample | Database'})
})
app.get('/produksi', (req, res)=>{
    res.render('dataProduksi', {title: 'Produksi | Database'})
    
})

app.get('/home', (req, res)=>{
    res.render('home', {title: 'Home | Database'})
})
app.get('/print', (req, res)=>{
    res.render('print')
})
// batas sidebar

app.get('/produk/:id', (req, res)=>{
    res.send('produksi ID: ' + req.params.id)
})




app.use('/', (req, res)=>{
    res.status(404)
    res.send('halaman tidak ditemukan')
})






// tambahan produksi routes
require("./app/routes/produksiRoutes")(app);
// port untuk server lokal
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(chalk.blueBright.bold(`Server berjalan pada Port : ${PORT}.`));
});