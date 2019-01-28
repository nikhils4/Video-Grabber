const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var youtubedl = require('youtube-dl');
// const video = require('./video.js');


const port =3000;

var app = express();
app.use(express.static(__dirname + '/views') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('index.hbs');
});

app.get('/download', (req,res) => {
    var video = youtubedl(req.query.video);
    video.on('info', function(info) {
        console.log('Download started');
        console.log('filename: ' + info._filename);
        console.log('size: ' + info.size);
    });

    video.pipe(fs.createWriteStream('myvideo.mp4'));
});


// app.get('/download', (req,res) => {
    
    //var myText= req.query.video;
    //module.exports.URL=myText;
   //const video = require('./video.js');
   //  video.getVideo(req.query.video,(error,video) => {
   //      if(error){
   //          res.render('error.hbs' ,{
   //              error : "Page "
   //
   //          })
   //      }
   //  else{
   //      console.log(req.query.video);
   // }
// // })
// });



app.listen(port, () => {
    console.log('Server is up at port ' + port);
});

