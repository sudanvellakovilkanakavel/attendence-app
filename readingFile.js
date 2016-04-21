var fs = require("fs");
//reading the file
 fs.readFile('Attendance01-04-2016.dat','utf8',function (err,data){
    if (err) {
       return console.error(err);
   }

   var lines = data.split("\n");

for (i=0;i<=lines.length;)
{
console.log(lines[i]);
i=i+1;
}
   });