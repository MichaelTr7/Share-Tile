
let Dynamic_Animation_In_Progress = false;
let Dynamic_Animation_Time_Buffer = 400;

function Setup_Dynamic_Menu(){
  document.getElementById('Menu_Button').addEventListener('click',Toggle_Dynamic_Menu);
  window.addEventListener("resize",Collapse_Dynamic_Menu);
  let Body_Elements = document.body.children;
  for(Index=0; Index < Body_Elements.length; Index++){
    Body_Elements[Index].addEventListener("click",Clicked_Elsewhere)
  }
  let Page_Links = document.getElementsByClassName('Menu_Links')
  for(Index=0; Index < Page_Links.length; Index++){
    Page_Links[Index].addEventListener('mouseover',Link_Hovered);
  }
  let Dynamic_Menu_Bar = document.getElementById('Navigation_Bar');
  Dynamic_Menu_Bar.addEventListener('mouseenter',Set_Highlight);
  Dynamic_Menu_Bar.addEventListener('mouseleave',Hide_Highlight);  
}

function Set_Highlight(){
  let Highlight_Patch = document.getElementById('Hover_Highlight');
  Highlight_Patch.style.filter = "opacity(1)";
}

function Hide_Highlight(){
  let Highlight_Patch = document.getElementById('Hover_Highlight');
  Highlight_Patch.style.filter = "opacity(0)";
}

function Link_Hovered(){
  let Menu_List = document.getElementsByClassName('Menu_Links');
  let Index = (this.dataset.index);
  let Percentage_Offset = String(Index*(100/6)) + "%";
  let Highlight = document.getElementById('Hover_Highlight');
  Highlight.style.left = Percentage_Offset ;
}


function Toggle_Dynamic_Menu(){
  if(Dynamic_Animation_In_Progress == false){
  Dynamic_Animation_In_Progress = true;
  let Menu_Button = document.getElementById('Menu_Button');
  let Menu_Frame = document.getElementById('Menu_Frame'); 
  let Circle_Mask = document.getElementById('Circle_Mask');
  if(Menu_Button.classList.contains("Rotate_Menu_Button")){
    // Menu_Button.classList.add('Reverse_Rotate_Menu_Button');
    // Menu_Button.classList.remove('Rotate_Menu_Button');
    // Menu_Frame.classList.add('Fade_Out_Menu');
    // Menu_Frame.classList.remove('Fade_In_Menu');
    // Circle_Mask.classList.add('Show_Background_Mask');
    // Circle_Mask.classList.remove('Hide_Background_Mask');
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
let Navigation_Buttons = document.getElementsByClassName('Menu_Links');
for(Index=0; Index < Navigation_Buttons.length; Index++){
  Navigation_Buttons[Index].style.pointerEvents = "all";
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
  let Navigation_Buttons = document.getElementsByClassName('Menu_Links');
  for(Index=0; Index < Navigation_Buttons.length; Index++){
    Navigation_Buttons[Index].style.pointerEvents = "none";
  }
}

function Clicked_Elsewhere(){
  if(this.id !== "Navigation_Bar"){
    Collapse_Dynamic_Menu();
  }  
}


