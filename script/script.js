
window.onload = function(){
 

var jsonArray = [];
$.getJSON( "json/data.json", function( data){
  jsonArray = data;
  console.log(jsonArray);
});

 var info = document.getElementById("info");
 var buttonShow = document.getElementById("buttonShow");
  
  buttonShow.onclick = function(){
      for (var i = 0; i < jsonArray.length; i++);
      info.innerHTML = jsonArray[i];
      
  };
};



