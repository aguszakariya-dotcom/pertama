const { count } = require('console');
const express = require('express');
const connection = require('../library/db');
const router = express.Router();

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM posts ORDER BY id desc', function (req, rows) {
        if (err) {
            req.flash('error', err);
            res.render('posts', {
                data: ''
            });
        } else {
            res.render('posts/index', {  // <== render ke view post index
                data: rows  // <-- data post
            })
        }
    })
})

module.exports = router;