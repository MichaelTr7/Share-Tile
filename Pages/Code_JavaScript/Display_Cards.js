
function Display_Card(){    
  let Button_Identifier = String(this.id);
  let About_Card = document.getElementsByClassName('About_Card')[0];
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let Battery_Card = document.getElementsByClassName('Battery_Card')[0];
  let Control_Center_Card = document.getElementsByClassName('Control_Center_Card')[0];
  let Widgets_Card = document.getElementsByClassName('Widgets_Card')[0];
  
  if(Button_Identifier == "About_Button"){
    // About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    About_Card.classList.toggle("Show_About_Card");
  }
  else if(Button_Identifier == "Network_Button"){
    About_Card.classList.remove("Show_About_Card");
    // Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Network_Card.classList.toggle("Show_Network_Card");
  }
  else if(Button_Identifier == "Battery_Button"){
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    // Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Battery_Card.classList.toggle("Show_Battery_Card");
  }
  else if(Button_Identifier == "Notification_Button"){
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    // Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Control_Center_Card.classList.toggle("Show_Control_Center_Card");
  }
  else if(Button_Identifier == "Date_Button"){
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    // Widgets_Card.classList.remove("Show_Widgets_Card");
    Widgets_Card.classList.toggle("Show_Widgets_Card");
  }    
}

function Unfocus_Cards(){
  let About_Card = document.getElementsByClassName('About_Card')[0];
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let Battery_Card = document.getElementsByClassName('Battery_Card')[0];
  let Control_Center_Card = document.getElementsByClassName('Control_Center_Card')[0];
  let Widgets_Card = document.getElementsByClassName('Widgets_Card')[0];
  About_Card.classList.remove("Show_About_Card");
  Network_Card.classList.remove("Show_Network_Card");
  Battery_Card.classList.remove("Show_Battery_Card");
  Control_Center_Card.classList.remove("Show_Control_Center_Card");
  Widgets_Card.classList.remove("Show_Widgets_Card");
}


