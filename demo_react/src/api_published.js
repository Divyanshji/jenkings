const express = require("express");
var request = require("request"); 
const server = express();
var work = {}; 
 
 
var options = { method: 'POST',
  url: 'https://api.boomi.com/apim/api/rest/v1/trainingdivyanshjain-HIGX0E/PublishedApi/query',
  headers: 
   { 
     'cache-control': 'no-cache',
     'Authorization': 'Basic ZGl2eWFuc2guamFpbkBuZW9zYWxwaGEuY29tOkRqQDE3MDkxOTk3',
     'content-type': 'application/xml' },
   body :  '<QueryConfig xmlns="http://api.platform.boomi.com/">'+
   '<QueryFilter>'+
     '<expression operator="and" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="GroupingExpression">'+
      '<nestedExpression operator="EQUALS" property="environmentId" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="SimpleExpression">'+
         '<argument>69ede2f7-2873-4169-9848-dded2a94cae3</argument>'+
       '</nestedExpression>'+
     '</expression>'+
   '</QueryFilter>'+
 '</QueryConfig>',
  xml: true };
 
request(options, function (error, response, body) {
  if (error) throw new Error(error);
 
  console.log(body);
  work=response;
  console.log("****************");
  console.log(response.body);
  console.log("****************");
  var parseString = require('xml2js').parseString;
  var xml = response.body;
  parseString(xml, function (err, result) {
    console.log(JSON.stringify(result));
});
 
});    
 
 
server.listen(process.env.PORT||8080,function(){
    console.log("server Started");
})