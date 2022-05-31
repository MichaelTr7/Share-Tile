
window.onload = function(){
  let Menu_Bar_Icons = document.getElementsByClassName('Menu_Bar_Buttons');
  for(Index=0; Index < Menu_Bar_Icons.length; Index++){
    Menu_Bar_Icons[Index].addEventListener('mousedown',Display_Card); 
  }
  
  let App_Icons = document.getElementsByClassName('App_Icons');
  for(Index=0; Index < App_Icons.length; Index++){
    App_Icons[Index].addEventListener("mouseover",Icon_Hovered);
  }
  
  let Dock = document.getElementById('Dock');
  Dock.addEventListener("mouseleave",Icon_Left);

  let Background = document.getElementById('Background');
  Background.addEventListener("mousedown",Unfocus_Cards);

  WIFI_Toggle_Switch = document.getElementById('WIFI_Toggle_Switch');
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  Network_Card.classList.toggle("Network_Card_Collapsed");
  console.log(WIFI_Toggle_Switch);
  WIFI_Toggle_Switch.addEventListener("click",Toggle_Network_Card);
    
}

function Toggle_Network_Card(){
  console.log(this.checked);
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  Network_Card.classList.toggle("Network_Card_Collapsed");
}













