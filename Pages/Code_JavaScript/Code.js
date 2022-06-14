
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
  WIFI_Toggle_Switch.addEventListener("click",Toggle_Network_Card);
    
  let White_WIFI_Symbol_1 = document.getElementsByClassName('White_WIFI_Symbol_1')[0];
  White_WIFI_Symbol_1.style.fillOpacity = "0.9";
    
  let Starlink_Toggle = document.getElementById('Select_Element_1');
  Starlink_Toggle.addEventListener("click",Starlink_Wifi_Clicked);
  
  let Mars_Base_Station_Toggle = document.getElementById('Select_Element_2');
  Mars_Base_Station_Toggle.addEventListener("click",Mars_Base_Station_Clicked);

  let Other_Networks_Toggle = document.getElementById('Select_Element_3');
  let Network_Preferences_Toggle = document.getElementById('Select_Element_4');
  
  let WIFI_Symbol_2 = document.getElementsByClassName('WIFI_Symbols')[1];
  WIFI_Symbol_2.classList.add("Off_Wifi_Toggle");
  
  let Display_Slider = document.getElementById('Display_Slider'); 
  let Sound_Slider = document.getElementById('Sound_Slider')
  
  Display_Slider.addEventListener('input',Adjust_Slider_Background);
  Sound_Slider.addEventListener('input',Adjust_Slider_Background);
  document.getElementById('WIFI_Toggle_Switch').click();
  
  
  
  
  
  
  
  
  
  
}










