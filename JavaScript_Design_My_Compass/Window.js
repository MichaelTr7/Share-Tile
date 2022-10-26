

window.onload = function(){
  document.getElementById('Menu_Button').addEventListener('click',Toggle_Menu_Overlay);
  
  let Redirect_Buttons = document.getElementsByClassName('Button_Links');
  for(Index=0; Index < Redirect_Buttons.length; Index++){
    Redirect_Buttons[Index].addEventListener('click',Navigate_To_Page);
  }

}


