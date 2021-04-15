// Create a Request instance
var req = new XMLHttpRequest();
//Initial the connection or create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
// Sendind the request
req.send();
// load the function
//This function will bw triggered only when 
req.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
    console.log(i,data[i].name);
    }
}
 