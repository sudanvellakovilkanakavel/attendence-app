var Slack = require('node-slack');
var slack = new Slack('https://hooks.slack.com/services/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',options);
//var slack = new Slack(hook_url,{proxy: http_proxy});




//Trying to send message to slack from Node.js app
//I have used following package  https://github.com/xoxco/node-slack

slack.send({
    text: 'Meassage from node.js app to slack!',
    channel: '#attendance',
    username: 'Bot'
});




  var fs = require("fs");
//reading the file
 fs.readFile('Attendance01-04-2016.dat','utf8',function (err,data){
    if (err) {
       return console.error(err);
   }
//spliting each line
   var lines = data.split("\n");
//storeing in array and printing the file
for (i=0;i<=lines.length;)
{
console.log(lines[i]);
i=i+1;
}
   });


 