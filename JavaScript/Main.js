
window.onload = function(){
  console.log("Test");
  let Links = document.getElementsByClassName('Containers');
  for(Index=3; Index < Links.length; Index++){
    Links[Index].addEventListener("click",Clicked);
  }
  
  // let Share_Button = document.getElementById('Share_Button');
  // Share_Button.addEventListener('Share');
  // console.log(Share_Button);
}

function Clicked(){
    console.log("Clicked");
    this.classList.remove('Button_Pressed');
    void this.offsetWidth
    this.classList.add('Button_Pressed');
}

