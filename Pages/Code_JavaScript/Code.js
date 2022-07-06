
window.onload = function(){
  let Menu_Bar_Icons = document.getElementsByClassName('Menu_Bar_Buttons');
  for(Index=0; Index < Menu_Bar_Icons.length; Index++){
    Menu_Bar_Icons[Index].addEventListener('mousedown',Display_Card); 
  }

  let Album_1 = document.getElementById('Album_1');
  Album_1.classList.add('State_1');

  let Album_2 = document.getElementById('Album_2');
  Album_2.classList.add('State_2');
  
  let Album_3 = document.getElementById('Album_3');
  Album_3.classList.add('State_3');
  
  let Album_4 = document.getElementById('Album_4');
  Album_4.classList.add('State_4');
  
  let Album_5 = document.getElementById('Album_5');
  Album_5.classList.add('State_5');
  
  
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
  
  let Main_Control_Toggles = document.getElementsByClassName('Control_Centre_Main_Toggle_Touch_Zones');
  for(Index=0; Index < Main_Control_Toggles.length; Index++){
    Main_Control_Toggles[Index].addEventListener('click',Toggle_Main_Control);
  }
    
  let Symbol_1 = document.getElementById('Control_Center_WIFI_Symbol');
  Symbol_1.classList.toggle("White_Fill_Toggle");
  let Main_Toggle_Container_1 = Symbol_1.parentElement.parentElement;
  Main_Toggle_Container_1.classList.toggle('Main_Toggle_Background');
  
  let Symbol_2 = document.getElementById('Control_Center_Bluetooth_Symbol');
  Symbol_2.classList.toggle("White_Fill_Toggle");
  let Main_Toggle_Container_2 = Symbol_2.parentElement.parentElement;
  Main_Toggle_Container_2.classList.toggle('Main_Toggle_Background');
  
  let Symbol_3 = document.getElementById('Control_Center_FileDrop_Symbol');
  Symbol_3.classList.toggle("White_Fill_Toggle");
  let Main_Toggle_Container_3 = Symbol_3.parentElement.parentElement;
  Main_Toggle_Container_3.classList.toggle('Main_Toggle_Background');
  
  let Do_Not_Disturb_Container = document.getElementById('Do_Not_Disturb_Container');
  Do_Not_Disturb_Container.addEventListener('click',Do_Not_Disturb_Toggled);
  
  document.getElementById('Fast_Forward_Button').addEventListener('click',Fast_Forward_Button_Pressed);
  
  let App_Icons = document.getElementsByClassName('App_Icons');
  for(Index=0; Index < App_Icons.length; Index++){
    App_Icons[Index].addEventListener("click",Launch_Application);
    App_Icons[Index].addEventListener("mouseover",Icon_Hovered);
  }
  
  let About_Button = document.getElementById('About_Button');
  About_Button.dispatchEvent(new Event('mousedown'));
  
  let Play_Button = document.getElementById('Play_Button');
  // Play_Button.addEventListener('click',);
  
  
  
  
}










