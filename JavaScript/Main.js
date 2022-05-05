
window.onload = function(){
  console.log("Test");
  let Links = document.getElementsByClassName('Links');
  for(Index=0; Index < Links.length; Index++){
    Links[Index].addEventListener("ontouchstart",Clicked);
    
  }
  
  
  
  
}

function Clicked(){
  
  console.log("Clicked");
}