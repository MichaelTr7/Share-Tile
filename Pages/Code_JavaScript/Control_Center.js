

function Toggle_Main_Control(){
  let Lookup_Table = {"Main_Toggle_Touch_Zone_1":"Control_Center_WIFI_Symbol",
                      "Main_Toggle_Touch_Zone_2":"Control_Center_Bluetooth_Symbol",
                      "Main_Toggle_Touch_Zone_3":"Control_Center_FileDrop_Symbol"
}
  
  let Target_Element = document.getElementById(Lookup_Table[String(this.id)]);
  console.log(Target_Element);
  Target_Element.classList.toggle("White_Fill_Toggle");
  
  
  

  
}