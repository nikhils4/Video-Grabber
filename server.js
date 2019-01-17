const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const video = require('./video.js');


const port =3000;

var app = express();
app.use(express.static(__dirname + '/views') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('index.hbs');
});




app.get('/download', (req,res) => {
    
    //var myText= req.query.video;
    //module.exports.URL=myText;
   //const video = require('./video.js');
    video.getVideo(req.query.video,(error,video) => {
        if(error){
            res.render('error.hbs' ,{
                error:error
            
            })
        }
    else{
        console.log(video.items);
    }
})
});



app.listen(port, () => {
    console.log('Server is up at port ' + port);
});

