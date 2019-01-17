const request = require("request");
// const id=require('./server.js');
//  var myText=id.URL;


//var url ='https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ID+'&key=AIzaSyDXom2ZGtlbb7yGtb4cxsDYxStryzITbXY'
 
var getVideo=(URL,callback)=> {
  var ID=extractVideoID(URL);
request({
    url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ID+'&key=AIzaSyDXom2ZGtlbb7yGtb4cxsDYxStryzITbXY',
    json: true
}, function (error, response, body) {

    if (!error) {
           callback(undefined,{
               items:body.items
           })
    }
    else
    {
        callback("No internet Connection");
    }
    

});
};


function extractVideoID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if ( match && match[7].length == 11 ){
        return match[7];
    }else{
        console.log("Could not extract video ID.");
    }
}

module.exports.getVideo =getVideo;


