
function Toggle_Main_Control(){
  let Lookup_Table = {"Main_Toggle_Touch_Zone_1":"Control_Center_WIFI_Symbol",
                      "Main_Toggle_Touch_Zone_2":"Control_Center_Bluetooth_Symbol",
                      "Main_Toggle_Touch_Zone_3":"Control_Center_FileDrop_Symbol"};
  
  let Target_Element = document.getElementById(Lookup_Table[String(this.id)]);
  Target_Element.classList.toggle("White_Fill_Toggle");
  let Main_Toggle_Container = Target_Element.parentElement.parentElement;
  Main_Toggle_Container.classList.toggle('Main_Toggle_Background');
  let Corresponding_Label = Lookup_Table[String(this.id)].replace("Symbol","Label").replace("Control_Center_","");
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  let WIFI_Toggle_Switch = document.getElementById('WIFI_Toggle_Switch');
  if(Corresponding_Label == "WIFI_Label"){
    let Network_Selector_Indicator = document.getElementsByClassName('White_WIFI_Symbol_1')[0];
    let Starlink_Flag = parseInt(Math.round(parseFloat(Network_Selector_Indicator.style.fillOpacity)));
    let Available_Network_Names = ["Mars Base Station","Starlink"];
    let Current_Network_Name = String(Available_Network_Names[Starlink_Flag]);      
    let WIFI_Label = document.getElementById('WIFI_Label');
    if(String(WIFI_Label.innerHTML).includes("Off")){
      WIFI_Label.innerHTML = "Wi-Fi<br><span>"+Current_Network_Name+"</span>"
      Network_Card.classList.remove("Network_Card_Collapsed");
      WIFI_Toggle_Switch.checked = true;
    }else{
      WIFI_Label.innerHTML = "Wi-Fi<br><span>Off</span>"
      let WIFI_Toggle_Switch = document.getElementById('WIFI_Toggle_Switch');
      Network_Card.classList.add("Network_Card_Collapsed");
      WIFI_Toggle_Switch.checked = false;
    }
  
  }
  if(Corresponding_Label == "Bluetooth_Label"){
    let Bluetooth_Label = document.getElementById('Bluetooth_Label');
    let FileDrop_Toggle = document.getElementById('Main_Toggle_Touch_Zone_3');
    if(String(Bluetooth_Label.innerHTML).includes("On")){
      Bluetooth_Label.innerHTML = "Bluetooth<br><span>Off</span>";
      let FileDrop_Label = document.getElementById('FileDrop_Label');
      if(String(FileDrop_Label.innerHTML).includes("Contacts Only")){
        FileDrop_Toggle.click();      
      }
    }else{
      Bluetooth_Label.innerHTML = "Bluetooth<br><span>On</span>";
    }
  }
  if(Corresponding_Label == "FileDrop_Label"){
    let FileDrop_Label = document.getElementById('FileDrop_Label');
    if(String(FileDrop_Label.innerHTML).includes("Contacts Only")){
      FileDrop_Label.innerHTML = "FileDrop<br><span>Off</span>";
    }else{
      FileDrop_Label.innerHTML = "FileDrop<br><span>Contacts Only</span>";
      if(String(Bluetooth_Label.innerHTML).includes("Off")){
        let Bluetooth_Toggle = document.getElementById('Main_Toggle_Touch_Zone_2');
        Bluetooth_Toggle.click();
      }
    }  
  }  
}

function Do_Not_Disturb_Toggled(){
  let Moon_Symbol = document.getElementById('Moon_Symbol');
  Moon_Symbol.classList.toggle("White_Fill_Toggle");
  let Moon_Symbol_Container = document.getElementById('Do_Not_Disturb_Circle');
  Moon_Symbol_Container.classList.toggle('Toggle_Purple_Background');

}






