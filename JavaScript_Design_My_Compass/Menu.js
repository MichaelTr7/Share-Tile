
let Dynamic_Animation_In_Progress = false;
let Dynamic_Animation_Time_Buffer = 400;

function Setup_Dynamic_Menu(){
  document.getElementById('Menu_Button').addEventListener('click',Toggle_Dynamic_Menu);
  window.addEventListener("resize",Collapse_Dynamic_Menu);
  
}

function Toggle_Dynamic_Menu(){
  if(Dynamic_Animation_In_Progress == false){
  Dynamic_Animation_In_Progress = true;
  let Menu_Button = document.getElementById('Menu_Button');
  let Menu_Frame = document.getElementById('Menu_Frame'); 
  let Circle_Mask = document.getElementById('Circle_Mask');
  if(Menu_Button.classList.contains("Rotate_Menu_Button")){
    Menu_Button.classList.add('Reverse_Rotate_Menu_Button');
    Menu_Button.classList.remove('Rotate_Menu_Button');
    Menu_Frame.classList.add('Fade_Out_Menu');
    Menu_Frame.classList.remove('Fade_In_Menu');
    Circle_Mask.classList.add('Show_Background_Mask');
    Circle_Mask.classList.remove('Hide_Background_Mask');
  }else{
    Menu_Button.classList.add('Rotate_Menu_Button');
    Menu_Button.classList.remove('Reverse_Rotate_Menu_Button');
    Menu_Frame.classList.add('Fade_In_Menu');
    Menu_Frame.classList.remove('Fade_Out_Menu');
    Circle_Mask.classList.add('Hide_Background_Mask');
    Circle_Mask.classList.remove('Show_Background_Mask');
  }  
  setTimeout(function(){Dynamic_Animation_In_Progress = false;}, Dynamic_Animation_Time_Buffer);
}
}

function Collapse_Dynamic_Menu(){
  if(Menu_Button.classList.contains("Rotate_Menu_Button")){
  let Menu_Button = document.getElementById('Menu_Button');
  let Menu_Frame = document.getElementById('Menu_Frame'); 
  let Circle_Mask = document.getElementById('Circle_Mask');
  Menu_Button.classList.add('Reverse_Rotate_Menu_Button');
  Menu_Button.classList.remove('Rotate_Menu_Button');
  Menu_Frame.classList.add('Fade_Out_Menu');
  Menu_Frame.classList.remove('Fade_In_Menu');
  Circle_Mask.classList.add('Show_Background_Mask');
  Circle_Mask.classList.remove('Hide_Background_Mask');
}
}


