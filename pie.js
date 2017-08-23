var readline = require('readline');
var fs = require('fs'); 
var crimeIndex = [];
var nonIndexCrime = [];
var violentCrime = [];
var propertyCrime = [];
var jasonarray =[];
var rl = readline.createInterface({
  input: fs.createReadStream('crimedata.csv')
});

rl.on('line', function(line){
  var jasonFormat={};
  var lineSplit=line.split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
  jasonFormat.FBICODE =lineSplit[14];
  jasonFormat.primaryType =lineSplit[5];
  jasonFormat.Description= lineSplit[8];
  jasonFormat.Year= lineSplit[17];

      if(jasonFormat.FBICODE=== '01A' || jasonFormat.FBICODE=== '05' 
      || jasonFormat.FBICODE== '02'  || jasonFormat.FBICODE== '06' 
      || jasonFormat.FBICODE== '03'  || jasonFormat.FBICODE== '07' 
      || jasonFormat.FBICODE== '04A' || jasonFormat.FBICODE== '09' 
      || jasonFormat.FBICODE== '04B'){
       
       if(jasonFormat.Year == '2015'){
          crimeIndex.push(jasonFormat);          
       }
  }
  if(jasonFormat.FBICODE=== '01B' || jasonFormat.FBICODE=== '08A' || jasonFormat.FBICODE== '08B'  || jasonFormat.FBICODE== '10' || jasonFormat.FBICODE== '11' || jasonFormat.FBICODE== '12' 
      || jasonFormat.FBICODE== '13' || jasonFormat.FBICODE== '14' 
      || jasonFormat.FBICODE== '15' || jasonFormat.FBICODE== '16'
      || jasonFormat.FBICODE== '17' || jasonFormat.FBICODE== '18'
       ||jasonFormat.FBICODE== '19' ||jasonFormat.FBICODE== '20'
       || jasonFormat.FBICODE== '22' ||jasonFormat.FBICODE== '24'
        || jasonFormat.FBICODE== '26'){
       
       if(jasonFormat.Year == '2015'){
          nonIndexCrime.push(jasonFormat);           
       }
  } 
  if(jasonFormat.FBICODE=== '01A' || jasonFormat.FBICODE=== '02' 
      || jasonFormat.FBICODE== '03'  || jasonFormat.FBICODE== '04A' 
      || jasonFormat.FBICODE== '04B'){
       
       if(jasonFormat.Year == '2015'){
               violentCrime.push(jasonFormat);      
       }
  }
  if(jasonFormat.FBICODE=== '05' || jasonFormat.FBICODE=== '06' 
      || jasonFormat.FBICODE== '07'  || jasonFormat.FBICODE== '09'){
       
       if(jasonFormat.Year == '2015'){
               propertyCrime.push(jasonFormat);           
       }
  }
});
    
rl.on('close', function(line) {
  
    var  IndexCrime = crimeIndex.reduce((c, ele) => {
       
           c++;
           return c;
   }, 0);
          
    var  NonIndexCrime = nonIndexCrime.reduce((c, ele) => {
       
           c++;
           return c;
   }, 0);
          
      var  ViolentCrime = violentCrime.reduce((c, ele) => {
       
           c++;
           return c;
   }, 0);
                    
      var  PropertyCrime = propertyCrime.reduce((c, ele) => {
           
            c++;
           return c;
   }, 0);
          
    jasonarray.push({Crime : 'IndexCrime',count: IndexCrime});
    jasonarray.push({Crime : 'NonIndexCrime',count: NonIndexCrime});
    jasonarray.push({Crime : 'ViolentCrime',count: ViolentCrime});
    jasonarray.push({Crime : 'PropertyCrime',count: PropertyCrime});

   var json = JSON.stringify(jasonarray,null,2);
       fs.writeFile('piechart.json',json);
});

     