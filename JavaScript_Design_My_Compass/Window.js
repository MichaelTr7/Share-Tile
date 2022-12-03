
window.onload = function(){
  Setup_Dynamic_Menu();
  Page_Navigator_Setup();
  Setup_Button_Animations();
  Touchscreen_Setup();
}

function Touchscreen_Setup(){
  if(window.matchMedia("(pointer: coarse)").matches) {
    document.getElementById("Hover_Highlight").style.backgroundColor = "transparent";
    let Gig_Tiles = document.getElementsByClassName('Gig_Tiles');
    for(Index=0; Index < Gig_Tiles.length; Index++){
      Gig_Tiles[Index].style.height = "90vw";
      Gig_Tiles[Index].style.width = "90vw";
    }
}  
}