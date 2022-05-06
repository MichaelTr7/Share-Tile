
window.onload = function(){
  console.log("Test");
  let Links = document.getElementsByClassName('Containers');
  for(Index=3; Index < Links.length; Index++){
    Links[Index].addEventListener("click",Clicked);
  }
  
}

function Clicked(){
    console.log("Clicked");
    this.classList.remove('Button_Pressed');
    void this.offsetWidth;
    this.classList.add('Button_Pressed');
}

