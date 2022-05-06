
window.onload = function(){
  console.log("Test");
  let Links = document.getElementsByClassName('Links');
  for(Index=0; Index < Links.length; Index++){
    Links[Index].addEventListener("touchstart",Pressed);
//       Links[Index].addEventListener("touchend",Releaed);
  }
  
}

function Pressed(){
//     Links = {
//       "Instagram":"https://www.instagram.com/drawingmycompass/",
//       "DeviantArt":"https://www.deviantart.com/drawingmycompass",
//       "Community Spotify Playlist":"https://open.spotify.com/playlist/1sHTvHLJuF3mtRILaiSmki?si=6abbb4a832f34eb2"
//     };
  
//     Target_Link = Links[String(this.innerHTML)];
//     window.location.href = Target_Link;
        this.parentElement.style.transform = "scale(1.1)";

    
    
}

function Released(){
//     Links = {
//       "Instagram":"https://www.instagram.com/drawingmycompass/",
//       "DeviantArt":"https://www.deviantart.com/drawingmycompass",
//       "Community Spotify Playlist":"https://open.spotify.com/playlist/1sHTvHLJuF3mtRILaiSmki?si=6abbb4a832f34eb2"
//     };
  
//     Target_Link = Links[String(this.innerHTML)];
//     window.location.href = Target_Link;
        this.parentElement.style.transform = "scale(1)";

    
    
}

