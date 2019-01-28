// const request = require("request");
// // const id=require('./server.js');
// //  var myText=id.URL;
//
//
// //var url ='https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ID+'&key=AIzaSyDXom2ZGtlbb7yGtb4cxsDYxStryzITbXY'
//
// var getVideo=(URL,callback)=> {
//   var ID = extractVideoID(URL);
// request({
//     url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ID+'&key=AIzaSyDXom2ZGtlbb7yGtb4cxsDYxStryzITbXY',
//     json: true
// }, function (error, response, body) {
//
//     if (!error) {
//            callback(undefined,{
//                items:body.items
//            })
//     }
//     else
//     {
//         callback("No internet Connection");
//     }
//
//
// });
// };
//
//
// function extractVideoID(url){
//     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
//     var match = url.match(regExp);
//     if ( match && match[7].length == 11 ){
//         return match[7];
//     }else{
//         console.log("Could not extract video ID.");
//     }
// }
//
// module.exports.getVideo =getVideo;


var fs = require('fs');
var youtubedl = require('youtube-dl');
var video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA');

// Will be called when the download starts.
video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info.filename);
    console.log('size: ' + info.size);
});

video.pipe(fs.createWriteStream('myvideo.mp4'));


