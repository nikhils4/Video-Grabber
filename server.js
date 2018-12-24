const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const video = require('./video.js');


const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/views/images') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('front.hbs');
});


app.get('/download', (req,res) => {
    video.getvideo((error,video) => {
        if(error){
            res.render('error.hbs')
        }
    else{
        res.render('result.hbs', {
            video: video.message
        })
    }
})
});

    


app.listen(port, () => {
    console.log('Server is up at port ' + port);
});

