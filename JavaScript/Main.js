
window.onload = function(){
  console.log("Test");
  let Links = document.getElementsByClassName('Links');
  for(Index=0; Index < Links.length; Index++){
    Links[Index].addEventListener("touchstart",Pressed,false);
    Links[Index].addEventListener("touchend",Pressed,false);
    Links[Index].addEventListener("mousedown",Pressed,false);
    Links[Index].addEventListener("mouseup",Pressed,false);
    Links[Index].addEventListener("click",Pressed,false);

  }
  
}

function Pressed(event){
    console.log(event.type)

    if(event.type == "touchstart"){
        this.parentElement.style.transform = "scale(1.05)";
    }
    if(event.type == "touchend"){
        this.parentElement.style.transform = "scale(1)";
    }
    if(event.type == "mousedown"){
      this.parentElement.classList.remove('Button_Pressed');
      void this.parentElement.offsetWidth;
      this.parentElement.classList.add('Button_Pressed');
    }
    
    
    
    //     Links = {
//       "Instagram":"https://www.instagram.com/drawingmycompass/",
//       "DeviantArt":"https://www.deviantart.com/drawingmycompass",
//       "Community Spotify Playlist":"https://open.spotify.com/playlist/1sHTvHLJuF3mtRILaiSmki?si=6abbb4a832f34eb2"
//     };
  
//     Target_Link = Links[String(this.innerHTML)];
//     window.location.href = Target_Link;
    
}




