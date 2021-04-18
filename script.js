var req = new XMLHttpRequest();
req.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=0b981b72e95bf4758a6b4680401e65b7',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
    console.log(i,data[i].name);
    }
}
