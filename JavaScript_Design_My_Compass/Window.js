
window.onload = function(){
  Setup_Dynamic_Menu();
  Page_Navigator_Setup();
  Setup_Button_Animations();
  Touchscreen_Setup();
}

function Touchscreen_Setup(){
  if(window.matchMedia("(pointer: coarse)").matches) {
    document.getElementById("Hover_Highlight").style.backgroundColor = "transparent";
}  
}