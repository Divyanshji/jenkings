const express = require("express");
var request = require("request");
const server = express();
var work = {};
var fs = require('fs'); // File System Module
var xml2js = require('xml2js'); // XML2JS Module
var parser = new xml2js.Parser(); // Creating XML to JSON parser object
// Reading and Parsing the file 



{
  var options = { method: 'POST',
  url: 'https://api.boomi.com/apim/api/rest/v1/trainingdivyanshjain-HIGX0E/AuthenticationSourceUser/',
  headers: 
   { 
     'cache-control': 'no-cache',
     'Authorization': 'Basic ZGl2eWFuc2guamFpbkBuZW9zYWxwaGEuY29tOkRqQDE3MDkxOTk3',
     'content-type': 'application/json' },
  body: {
    "userName" : "Johnny23"+Math.random(),                                                               //"username" : req.body.username  //from db
    "credential":{"password":"1234"},                                                     //"pass" : req.body.pass 
    "authSourceId" : "a0ca2a16-7e99-4740-a92d-3f5e44f1ea6d",                              //"authSourceId" : req.body.authSourceId
    "enabled" : "false",                                                                  //"enabled" : req.body.status  
    "groups":[{"groupId": "fe520542-1e9d-44ad-9b45-9b7968d14a0a", "groupName":"Developer"}]//"username" : req.body.username  
   
},
  json: true };

  


request(options, function (error, response, body) {
  if (error) throw new Error(error);
 var a=JSON.stringify(body);
      console.log();
      console.log(JSON.parse(a));
      
      console.log("****************");
      console.log(body.authSourceId);
      // console.log(response);

      var parseString = require('xml2js').parseString;
      var xml = body;
      parseString(xml, function (err, result) {
      console.log(JSON.stringify(result));
        
      });

});
}


server.listen(process.env.PORT||8085,function(){
    console.log("server Started");
})
