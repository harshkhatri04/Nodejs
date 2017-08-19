var readline = require('readline');
var fs = require('fs'); 
var year2001 = [];
var year2002 = [];
var year2003 = [];
var year2004 = [];
var year2005 = [];
var year2006 = [];
var year2007 = [];
var year2008 = [];
var year2009 = [];
var year2010 = [];
var year2011 = [];
var year2012 = [];
var year2013 = [];
var year2014 = [];
var year2015 = [];
var year2016 = [];
var jasonarray =[];

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
       
           if (jasonFormat.Year == '2001') {
             year2001.push(jasonFormat);
            } else if (jasonFormat.Year == '2002') {
           year2002.push(jasonFormat);
            } else if (jasonFormat.Year == '2003') {
           year2003.push(jasonFormat);
            } else if (jasonFormat.Year == '2004') {
           year2004.push(jasonFormat);
            } else if (jasonFormat.Year == '2005') {
           year2005.push(jasonFormat);
            } else if (jasonFormat.Year == '2006') {
           year2006.push(jasonFormat);
            } else if (jasonFormat.Year == '2007') {
           year2007.push(jasonFormat);
            } else if (jasonFormat.Year == '2008') {
           year2008.push(jasonFormat);
            } else if (jasonFormat.Year == '2009') {
           year2009.push(jasonFormat);
           } else if (jasonFormat.Year == '2010') {
           year2010.push(jasonFormat);
           } else if (jasonFormat.Year == '2011') {
           year2011.push(jasonFormat);
            } else if (jasonFormat.Year == '2012') {
           year2012.push(jasonFormat);
            } else if (jasonFormat.Year == '2013') {
           year2013.push(jasonFormat);
            }  else if (jasonFormat.Year == '2014') {
           year2014.push(jasonFormat);
            } else if (jasonFormat.Year == '2015') {
           year2015.push(jasonFormat);
            } else if (jasonFormat.Year == '2016') {
           year2016.push(jasonFormat);
         }
       }
  }
});

rl.on('close', function(line) {
 
    
    var  true2001 = year2001.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2001 = year2001.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);
  
    var  true2002 = year2002.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2002 = year2002.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);

    var  true2003 = year2003.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2003 = year2003.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);
  
    var  true2004 = year2004.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2004 = year2004.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);

    
    var  true2005= year2005.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2005 = year2005.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);

    
    var  true2006 = year2006.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2006= year2006.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);

    
    var  true2007= year2007.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2007= year2007.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);

      
    var  true2008 = year2008.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2008 = year2008.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
        
       return c;
   }, 0);


    
    var    true2009 = year2009.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var false2009 = year2009.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;
         
       return c;
   }, 0);

         
    var    true2010 = year2010.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2010 = year2010.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);


   var    true2011 = year2011.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2011= year2011.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);
  
     var    true2012= year2012.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2012= year2012.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);

   var  theft2013 = year2013.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

      var    true2013 = year2013.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);

    var  false2013 = year2013.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);

    var  theft2014 = year2014.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

    var    true2014 = year2014.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2014 = year2014.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);

    var  theft2015 = year2015.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

    var    true2015 = year2015.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2015 = year2015.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);

    var  theft2016 = year2016.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

    var    true2016= year2016.reduce((c, ele) => {
       if (ele.Description == 'true')
           c++;
           return c;
   }, 0);


    var  false2016= year2016.reduce((c, ele) => {
       if (ele.Description == 'false')
           c++;  
       return c;
   }, 0);
    
      jasonarray.push({year : 2001,true2001,false2001});
      jasonarray.push({year : 2002,true2002,false2002});
      jasonarray.push({year : 2003,true2003,false2003});
      jasonarray.push({year : 2004,true2004,false2004});
      jasonarray.push({year : 2005,true2005,false2005});
      jasonarray.push({year : 2006,true2006,false2006});
      jasonarray.push({year : 2007,true2007,false2007});
      jasonarray.push({year : 2008,true2008,false2008});
      jasonarray.push({year : 2009,true2009,false2009});
      jasonarray.push({year : 2010,true2010,false2010});
      jasonarray.push({year : 2011,true2011,false2011});
      jasonarray.push({year : 2012,true2012,false2012});
      jasonarray.push({year : 2013,true2013,false2013});
      jasonarray.push({year : 2014,true2014,false2014});
      jasonarray.push({year : 2015,true2015,false2015});
      jasonarray.push({year : 2016,true2016,false2016});
        
    var json = JSON.stringify(jasonarray,null,2);
       fs.writeFileSync('assult.json', json);

  });