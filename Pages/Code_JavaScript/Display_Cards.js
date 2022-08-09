
function Display_Card(){    
  let Button_Identifier = String(this.id);
  let About_Card = document.getElementsByClassName('About_Card')[0];
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let Battery_Card = document.getElementsByClassName('Battery_Card')[0];
  let Control_Center_Card = document.getElementsByClassName('Control_Center_Card')[0];
  let Widgets_Card = document.getElementsByClassName('Widgets_Card')[0];
  let Widgets_Card_Background = document.getElementsByClassName('Widgets_Glass_Background')[0];
  
  
  if(Button_Identifier == "Date_Button"){
    console.log("Show Widgets");
    var Movements = document.getElementsByClassName("Activity_Movements");
    var Blue_Movement = Movements[2];
    Blue_Movement.classList.add("Rotate_Blue_Movements");
    var Green_Movement = Movements[1];
    Green_Movement.classList.add("Rotate_Green_Movements");
    var Red_Movement = Movements[0];
    Red_Movement.classList.add("Rotate_Red_Movements");

    var Blue_Ring = document.getElementById("Blue_Ring");
    Blue_Ring.classList.add("Blue_Ring_Animation");
    var Green_Ring = document.getElementById("Green_Ring");
    Green_Ring.classList.add("Green_Ring_Animation");
    var Red_Ring = document.getElementById("Red_Ring");
    Red_Ring.classList.add("Red_Ring_Animation");
    
    let Start_Nubs = document.getElementsByClassName("Start_Activity_Circles");
    Start_Nubs[0].classList.add("Show_Red_Nub");
    Start_Nubs[1].classList.add("Show_Green_Nub");
    Start_Nubs[2].classList.add("Show_Blue_Nub");

    
    document.getElementById("Move_Label").classList.add("Show_Move_Label");
    document.getElementById("Exercise_Label").classList.add("Show_Exercise_Label");
    document.getElementById("Stand_Label").classList.add("Show_Stand_Label");

    
    
  }
  
  if(Button_Identifier == "About_Button"){
    // About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Widgets_Card_Background.classList.remove("Show_Widgets_Card");
    About_Card.classList.toggle("Show_About_Card");
  }
  else if(Button_Identifier == "Network_Button"){
    About_Card.classList.remove("Show_About_Card");
    // Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Widgets_Card_Background.classList.remove("Show_Widgets_Card");
    Network_Card.classList.toggle("Show_Network_Card");
  }
  else if(Button_Identifier == "Battery_Button"){
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    // Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Widgets_Card_Background.classList.remove("Show_Widgets_Card");
    Battery_Card.classList.toggle("Show_Battery_Card");
  }
  else if(Button_Identifier == "Notification_Button"){
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    // Control_Center_Card.classList.remove("Show_Control_Center_Card");
    Widgets_Card.classList.remove("Show_Widgets_Card");
    Widgets_Card_Background.classList.remove("Show_Widgets_Card");
    Control_Center_Card.classList.toggle("Show_Control_Center_Card");
  }
  else if(Button_Identifier == "Date_Button"){
    About_Card.classList.remove("Show_About_Card");
    Network_Card.classList.remove("Show_Network_Card");
    Battery_Card.classList.remove("Show_Battery_Card");
    Control_Center_Card.classList.remove("Show_Control_Center_Card");
    // Widgets_Card.classList.remove("Show_Widgets_Card");
    Widgets_Card.classList.toggle("Show_Widgets_Card");
    Widgets_Card_Background.classList.toggle("Show_Widgets_Card");
  }    
}

function Unfocus_Cards(){
  let About_Card = document.getElementsByClassName('About_Card')[0];
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let Battery_Card = document.getElementsByClassName('Battery_Card')[0];
  let Control_Center_Card = document.getElementsByClassName('Control_Center_Card')[0];
  let Widgets_Card = document.getElementsByClassName('Widgets_Card')[0];
  let Widgets_Card_Background = document.getElementsByClassName('Widgets_Glass_Background')[0];
  About_Card.classList.remove("Show_About_Card");
  Network_Card.classList.remove("Show_Network_Card");
  Battery_Card.classList.remove("Show_Battery_Card");
  Control_Center_Card.classList.remove("Show_Control_Center_Card");
  Widgets_Card.classList.remove("Show_Widgets_Card");
  Widgets_Card_Background.classList.remove("Show_Widgets_Card");
}


