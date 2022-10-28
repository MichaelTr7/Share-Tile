
function Page_Navigator_Setup(){
  let Redirect_Buttons = document.getElementsByClassName('Button_Links');
  for(Index=0; Index < Redirect_Buttons.length; Index++){
    Redirect_Buttons[Index].addEventListener('click',Navigate_To_Page);
  }
}

function Navigate_To_Page(){
  console.log("Navigating to Page ...");
  
  
  
  let Page_Dictionary = {
    "":"",
    "":"",
    "":"",
    
    
  }
  
  
  
  
}