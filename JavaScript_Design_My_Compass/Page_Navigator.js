
function Page_Navigator_Setup(){
  let Example_Buttons = document.getElementsByClassName('Example_Buttons');
  for(Index=0; Index < Example_Buttons.length; Index++){
    Example_Buttons[Index].addEventListener('click',Scroll_To_Section);  
  }
  let Redirect_Buttons = document.getElementsByClassName('Gig_Buttons');
  for(Index=0; Index < Redirect_Buttons.length; Index++){
    Redirect_Buttons[Index].addEventListener('click',Navigate_To_Page);
  }
  let Navigation_Buttons = document.getElementsByClassName('Menu_Links');
  for(Index=0; Index < Navigation_Buttons.length; Index++){
    Navigation_Buttons[Index].addEventListener('click',Go_To_Page);
  }  
}

function Scroll_To_Section(){
  console.log("Scroll to Section: ");
  let Section_Index = parseInt(String(this.id).split("_")[1]);
  let Snap_Elements = [
    document.getElementById('Logo_Design_Title'),
    document.getElementById('App_Development_Title'),
    document.getElementById('Portfolio_Websites_Title')
  ];
  let Target_Element = Snap_Elements[Section_Index];
  let Target_Y = Target_Element.getBoundingClientRect().top + window.scrollY - 2*Target_Element.getBoundingClientRect().height;
  window.scroll({
  top: Target_Y,
  behavior: 'smooth'
  });
  // console.log(Target_Element); 
  // Target_Element.scrollIntoView();  
}

function Navigate_To_Page(){
  console.log("Navigating to Page ...");
  console.log(this.id);
  let Page_Dictionary = {
    "Gig_0":"https://www.fiverr.com/share/940gyE?utm_source=CopyLink_Mobile",
    "Gig_1":"https://www.fiverr.com/share/8m5gWr?utm_source=CopyLink_Mobile",
    "Gig_2":"https://www.fiverr.com/share/217gqN?utm_source=CopyLink_Mobile",
  }
  let Target_Link = Page_Dictionary[String(this.id)];
  console.log(Target_Link);
  window.location.href = Target_Link;
}


function Go_To_Page(){
  console.log("Go to Page: ");
  console.log(this.dataset.index);
  let Page_Links = [
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  
  
  
  
  
  
  
}