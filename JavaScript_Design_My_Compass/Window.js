

window.onload = function(){
  document.getElementById('Menu_Button').addEventListener('click',Toggle_Menu_Overlay);
  
  
  
  
}


function Toggle_Menu_Overlay(){
  console.log("Toggle Overlay");

  let Menu_Button = document.getElementById('Menu_Button');
  let Menu_Frame = document.getElementById('Menu_Frame'); 
  if(Menu_Button.classList.contains("Rotate_Menu_Button")){
    console.log("Clockwise");
    Menu_Button.classList.add('Reverse_Rotate_Menu_Button');
    Menu_Button.classList.remove('Rotate_Menu_Button');
    Menu_Frame.classList.add('Fade_Out_Menu');
    Menu_Frame.classList.remove('Fade_In_Menu');
  }else{
    console.log("Counter-Clockwise");
    Menu_Button.classList.add('Rotate_Menu_Button');
    Menu_Button.classList.remove('Reverse_Rotate_Menu_Button');
    Menu_Frame.classList.add('Fade_In_Menu');
    Menu_Frame.classList.remove('Fade_Out_Menu');
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