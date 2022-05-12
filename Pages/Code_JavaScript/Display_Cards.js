
function Display_Card(){    
  let Button_Identifier = String(this.id);
  let About_Card = document.getElementsByClassName('About_Card')[0];
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let Battery_Card = document.getElementsByClassName('Battery_Card')[0];
  let Notification_Center_Card = document.getElementsByClassName('Notification_Center_Card')[0];
  let Date_Card = document.getElementsByClassName('Date_Card')[0];
  
  if(Button_Identifier == "About_Button"){
    console.log("About button pressed");
    // About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Notification_Center_Card.classList.remove("Show_Notification_Center_Card");
    Date_Card.classList.remove("Show_Date_Card");
    About_Card.classList.toggle("Show_About_Card");
  }
  else if(Button_Identifier == "Network_Button"){
    console.log("Network button pressed");
    About_Card.classList.remove("Show_About_Card");
    // Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Notification_Center_Card.classList.remove("Show_Notification_Center_Card");
    Date_Card.classList.remove("Show_Date_Card");
    Network_Card.classList.toggle("Show_Network_Card");
  }
  else if(Button_Identifier == "Battery_Button"){
    console.log("Battery button pressed");
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    // Battery_Card.classList.remove("Show_Battery_Card");
    Notification_Center_Card.classList.remove("Show_Notification_Center_Card");
    Date_Card.classList.remove("Show_Date_Card");
    Battery_Card.classList.toggle("Show_Battery_Card");
  }
  else if(Button_Identifier == "Notification_Button"){
    console.log("Notification button pressed");
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    // Notification_Center_Card.classList.remove("Show_Notification_Center_Card");
    Date_Card.classList.remove("Show_Date_Card");
    Notification_Center_Card.classList.toggle("Show_Notification_Center_Card");
  }
  else if(Button_Identifier == "Date_Button"){
    console.log("Date button pressed");
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Notification_Center_Card.classList.remove("Show_Notification_Center_Card");
    // Date_Card.classList.remove("Show_Date_Card");
    Date_Card.classList.toggle("Show_Date_Card");
  }    
}

function Unfocus_Cards(){
  let About_Card = document.getElementsByClassName('About_Card')[0];
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let Battery_Card = document.getElementsByClassName('Battery_Card')[0];
  let Notification_Center_Card = document.getElementsByClassName('Notification_Center_Card')[0];
  let Date_Card = document.getElementsByClassName('Date_Card')[0];
  About_Card.classList.remove("Show_About_Card");
  Network_Card.classList.remove("Show_Network_Card");
  Battery_Card.classList.remove("Show_Battery_Card");
  Notification_Center_Card.classList.remove("Show_Notification_Center_Card");
  Date_Card.classList.remove("Show_Date_Card");
}


