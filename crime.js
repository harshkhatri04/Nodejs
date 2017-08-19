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
  jasonFormat.Description= lineSplit[6];
  jasonFormat.Year= lineSplit[17];

     if(jasonFormat.primaryType=== 'THEFT' ){

     if(jasonFormat.Description=== 'OVER $500' || jasonFormat.Description=== '$500 AND UNDER'){

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
     
    var  over2001 = year2001.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2001 = year2001.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);
 
    var  over2002 = year2002.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2002 = year2002.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);   

    var  over2003 = year2003.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2003 = year2003.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);
  
    var  over2004 = year2004.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2004 = year2004.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);

    var  over2005= year2005.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2005 = year2005.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);

    
    var  over2006 = year2006.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2006= year2006.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);

    var  over2007= year2007.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2007= year2007.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);
   
    var  over2008 = year2008.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2008 = year2008.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
        
       return c;
   }, 0);

    var    over2009 = year2009.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var under2009 = year2009.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;
         
       return c;
   }, 0);
   
    var    over2010 = year2010.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);

    var  under2010 = year2010.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);

    var    over2011 = year2011.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2011= year2011.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);


   
     var    over2012= year2012.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2012= year2012.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);

   var  theft2013 = year2013.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

      var    over2013 = year2013.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2013 = year2013.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);

    var  theft2014 = year2014.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

    var    over2014 = year2014.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2014 = year2014.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);

    var  theft2015 = year2015.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

    var    over2015 = year2015.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2015 = year2015.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);

    var  theft2016 = year2016.reduce((c, ele) => {
       if (ele.primaryType == 'THEFT')
           c++;
           return c;
        }, 0);

    var    over2016= year2016.reduce((c, ele) => {
       if (ele.Description == 'OVER $500')
           c++;
           return c;
   }, 0);


    var  under2016= year2016.reduce((c, ele) => {
       if (ele.Description == '$500 AND UNDER')
           c++;  
       return c;
   }, 0);

      jasonarray.push({year : 2001,over2001,under2001});
      jasonarray.push({year : 2002,over2002,under2002});
      jasonarray.push({year : 2003,over2003,under2003});
      jasonarray.push({year : 2004,over2004,under2004});
      jasonarray.push({year : 2005,over2005,under2005});
      jasonarray.push({year : 2006,over2006,under2006});
      jasonarray.push({year : 2007,over2007,under2007});
      jasonarray.push({year : 2008,over2008,under2008});
      jasonarray.push({year : 2009,over2009,under2009});
      jasonarray.push({year : 2010,over2010,under2010});
      jasonarray.push({year : 2011,over2011,under2011});
      jasonarray.push({year : 2012,over2012,under2012});
      jasonarray.push({year : 2013,over2013,under2013});
      jasonarray.push({year : 2014,over2014,under2014});
      jasonarray.push({year : 2015,over2015,under2015});
      jasonarray.push({year : 2016,over2016,under2016});
           
     var json = JSON.stringify(jasonarray,null,2);
       fs.writeFileSync('CRIME.json', json);

  });