

window.onload = function(){
  document.getElementById('Menu_Button').addEventListener('click',Toggle_Menu_Overlay);
  
  
  
  
}


function Toggle_Menu_Overlay(){
  console.log("Toggle Overlay");

  let Menu_Button = document.getElementById('Menu_Button');
  // void Menu_Button.offsetWidth;
  if(Menu_Button.classList.contains("Rotate_Menu_Button")){
    console.log("Clockwise");
    Menu_Button.classList.add('Reverse_Rotate_Menu_Button');
    Menu_Button.classList.remove('Rotate_Menu_Button');
  }else{
    console.log("Counter-Clockwise");
    Menu_Button.classList.add('Rotate_Menu_Button');
    Menu_Button.classList.remove('Reverse_Rotate_Menu_Button');
  }

  let Circle_Mask = document.getElementById('Circle_Mask');
  if(Circle_Mask.classList.contains("Hide_Background_Mask")){
    Circle_Mask.classList.add('Show_Background_Mask');
    Circle_Mask.classList.remove('Hide_Background_Mask');
  
  }else{
    Circle_Mask.classList.add('Hide_Background_Mask');
    Circle_Mask.classList.remove('Show_Background_Mask');
  }
  

}