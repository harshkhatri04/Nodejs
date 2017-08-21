    var readline = require('readline');
    var fs = require('fs'); 
    var year2000 = [];
    var jasonarray =[];
    var filterValue=[];
    var rl = readline.createInterface({
      input: fs.createReadStream('crimedata.csv')
    });
    rl.on('line', function(line){
      var jasonFormat={};
      var lineSplit=line.split(',');
      jasonFormat.primaryType =lineSplit[5];
      jasonFormat.Description= lineSplit[8];                                                                        
      jasonFormat.Year= lineSplit[17];
      if(jasonFormat.primaryType=== 'THEFT' ){
       if(jasonFormat.Description=== 'true' || jasonFormat.Description=== 'false'){
       filterValue.push(jasonFormat)
    }}});

    rl.on('close', function(line) {
        var OVER  = filterValue.reduce((c, ele) => {
        for (var i = 0; i < 16; i++) {
          if(ele.Description== 'true')
            if (ele.Year == '200' + (1+i))
              c[i]++;
            else if (ele.Year=='20' + (1+i))
              c[i]++;
      }
      return c;  
    }, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
      console.log(OVER) 
    var UNDER = filterValue.reduce((c1, ele) => {
        for (var i = 0; i < 16; i++) {
          if(ele.Description== 'false')
            if (ele.Year == '200' + (1+i))
              c1[i]++;
            else if (ele.Year=='20' + (1+i))
              c1[i]++;
      }
      return c1;      
    }, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
      console.log(UNDER)

    for (let k = 0; k< 16; k++) {
    var obj = {
      year: k + 2001,
     'Arrested': OVER[k],
      'Not Arrested': UNDER[k]
    }
    jasonarray.push(obj)
  }
  var json = JSON.stringify(jasonarray,null,2);
           fs.writeFileSync('Assult.json', json);
});   
