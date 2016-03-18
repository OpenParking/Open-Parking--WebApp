
//alert(window.innerWidth);
window.onscroll = function() {myFunction()};
window.onload = function(){
  var scrollPosition = window.pageYOffset;
  var windowSize     = window.innerHeight;
  var bodyHeight     = document.body.offsetHeight;
  console.log("LOAD!"+Math.max(bodyHeight - (scrollPosition + windowSize), 0));

  if(window.innerWidth > 600){
  }
}

function myFunction() {
  var scrollPosition = window.pageYOffset;
var windowSize     = window.innerHeight;
var bodyHeight     = document.body.offsetHeight;
  console.log(Math.max(bodyHeight - (scrollPosition + windowSize), 0));

  if(window.innerWidth > 600){
  }
  else{

  }
}