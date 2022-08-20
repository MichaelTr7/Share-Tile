
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
    var Green_Movement = Movements[1];
    var Red_Movement = Movements[0];
    var Blue_Ring = document.getElementById("Blue_Ring");
    var Green_Ring = document.getElementById("Green_Ring");
    var Red_Ring = document.getElementById("Red_Ring");
    let Start_Nubs = document.getElementsByClassName("Start_Activity_Circles");
    let Red_Start_Nub = Start_Nubs[0];
    let Move_Label = document.getElementById("Move_Label");
    let Exercise_Label = document.getElementById("Exercise_Label");
    let Stand_Label = document.getElementById("Stand_Label");
    
    Blue_Movement.classList.remove("Rotate_Blue_Movements");
    Green_Movement.classList.remove("Rotate_Green_Movements");
    Red_Movement.classList.remove("Rotate_Red_Movements");
    Blue_Ring.classList.remove("Blue_Ring_Animation");
    Green_Ring.classList.remove("Green_Ring_Animation");
    Red_Ring.classList.remove("Red_Ring_Animation");    
    Start_Nubs[0].classList.remove("Show_Red_Nub");
    Start_Nubs[1].classList.remove("Show_Green_Nub");
    Start_Nubs[2].classList.remove("Show_Blue_Nub");
    Move_Label.classList.remove("Show_Move_Label");
    Exercise_Label.classList.remove("Show_Exercise_Label");
    Stand_Label.classList.remove("Show_Stand_Label");

    void Blue_Movement.offsetWidth;
    void Green_Movement.offsetWidth;
    void Red_Movement.offsetWidth;
    void Blue_Ring.offsetWidth;
    void Green_Ring.offsetWidth;
    void Red_Ring.offsetWidth;
    void Start_Nubs[0].offsetWidth;
    void Start_Nubs[1].offsetWidth;
    void Start_Nubs[2].offsetWidth;
    void Move_Label.offsetWidth;
    void Exercise_Label.offsetWidth;
    void Stand_Label.offsetWidth;
    
    Blue_Movement.classList.add("Rotate_Blue_Movements");
    Green_Movement.classList.add("Rotate_Green_Movements");
    Red_Movement.classList.add("Rotate_Red_Movements");
    Blue_Ring.classList.add("Blue_Ring_Animation");
    Green_Ring.classList.add("Green_Ring_Animation");
    Red_Ring.classList.add("Red_Ring_Animation");    
    Start_Nubs[0].classList.add("Show_Red_Nub");
    Start_Nubs[1].classList.add("Show_Green_Nub");
    Start_Nubs[2].classList.add("Show_Blue_Nub");
    Move_Label.classList.add("Show_Move_Label");
    Exercise_Label.classList.add("Show_Exercise_Label");
    Stand_Label.classList.add("Show_Stand_Label");

    

    
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


