
function Setup_Spectrum_Analyzer(){
  console.log("Setting up spectrum analyzer ...");
  
  let Red_LED = document.getElementById('Red_LED');
  let Green_LED = document.getElementById('Green_LED');
  Turn_Off_Spectrum_Analyzer();  
  Red_LED.addEventListener("click",Turn_Off_Spectrum_Analyzer);
  Green_LED.addEventListener("click",Turn_On_Spectrum_Analyzer);
  let Power_Knob = document.getElementById('Power_Knob');
  Power_Knob.addEventListener("click",Toggle_Power);
  let Gain_Knob = document.getElementById('Gain_Knob');
  Gain_Knob.addEventListener("click",Adjust_Gain);
}

function Turn_Off_Spectrum_Analyzer(){
  Red_LED.classList.add('Turn_On_Red_LED');
  Red_LED.style.backgroundColor = "rgba(230,60,60,1)";
  Green_LED.classList.remove('Turn_On_Green_LED');
  Green_LED.style.backgroundColor = "rgba(0,128,0,0.3)";
}

function Turn_On_Spectrum_Analyzer(){
  Red_LED.classList.remove('Turn_On_Red_LED');
  Red_LED.style.backgroundColor = "rgba(230,60,60,0.3)";
  Green_LED.classList.add('Turn_On_Green_LED');
  Green_LED.style.backgroundColor = "rgba(0,128,0,1)";
}

function Toggle_Power(){
  let Power_Knob = document.getElementsByClassName('Control_Knobs')[0];
  Power_Knob.classList.remove('Pressed_Knob');
  void Power_Knob.offsetWidth
  Power_Knob.classList.add('Pressed_Knob');
  console.log(Power_Knob);
  if(document.getElementById("Green_LED").classList.contains("Turn_On_Green_LED")){
    Turn_Off_Spectrum_Analyzer();
  }else{
    Turn_On_Spectrum_Analyzer();
  }  
}

function Adjust_Gain(){
  let Current_Multipler = (document.getElementsByClassName('Knob_Nubs')[1]).innerHTML[1];
  let Gain_Multipliers = [1,2,3,5];
  let New_Multiplier = Gain_Multipliers[(Gain_Multipliers.indexOf(parseInt(Current_Multipler))+1) % 4];
  console.log(New_Multiplier);
  document.getElementsByClassName('Knob_Nubs')[1].innerHTML = "x" + String(New_Multiplier);
  let Gain_Knob = document.getElementById('Gain_Knob');
  Gain_Knob.classList.remove('Pressed_Knob');
  void Gain_Knob.offsetWidth
  Gain_Knob.classList.add('Pressed_Knob');
}








