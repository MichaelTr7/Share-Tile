
function Toggle_Network_Card(){
  console.log(this.checked);
  let Network_Card = document.getElementsByClassName('Network_Card')[0];
  Network_Card.classList.toggle("Network_Card_Collapsed");
}

function Starlink_Wifi_Clicked(){
  let White_WIFI_Symbol_1 = document.getElementsByClassName('White_WIFI_Symbol_1')[0];
  White_WIFI_Symbol_1.style.fillOpacity = "0.9";
  let White_WIFI_Symbol_2 = document.getElementsByClassName('White_WIFI_Symbol_2')[0];
  White_WIFI_Symbol_2.style.fillOpacity = "0";
  let WIFI_Symbol_1 = document.getElementsByClassName('WIFI_Symbols')[0];
  WIFI_Symbol_1.classList.remove("Off_Wifi_Toggle");
  let WIFI_Symbol_2 = document.getElementsByClassName('WIFI_Symbols')[1];
  WIFI_Symbol_2.classList.add("Off_Wifi_Toggle");
}

function Mars_Base_Station_Clicked(){
  let White_WIFI_Symbol_2 = document.getElementsByClassName('White_WIFI_Symbol_2')[0];
  White_WIFI_Symbol_2.style.fillOpacity = "0.9";
  let White_WIFI_Symbol_1 = document.getElementsByClassName('White_WIFI_Symbol_1')[0];
  White_WIFI_Symbol_1.style.fillOpacity = "0";
  let WIFI_Symbol_1 = document.getElementsByClassName('WIFI_Symbols')[0];
  WIFI_Symbol_1.classList.add("Off_Wifi_Toggle");
  let WIFI_Symbol_2 = document.getElementsByClassName('WIFI_Symbols')[1];
  WIFI_Symbol_2.classList.remove("Off_Wifi_Toggle");
}

function Other_Networks_Clicked(){
  console.log("Clicked 3");
}

function Other_Networks_Clicked(){
  console.log("Clicked 3");
}


