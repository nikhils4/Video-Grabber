const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var ytdl = require('ytdl-core');
// const video = require('./video.js');


const port =3500;

var app = express();
app.use(express.static(__dirname + '/views') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('index.hbs');
});

app.get('/download', (req,res) => {
    var URL = req.query.video;
    console.log(URL);
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});


app.listen(port, () => {
    console.log('Server is up at port ' + port);
});

