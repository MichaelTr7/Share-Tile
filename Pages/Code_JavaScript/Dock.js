
function Icon_Hovered(){  
  let Dock_Boundaries = document.getElementById('Dock').getBoundingClientRect();
  let Dock_Left = Dock_Boundaries.left;  
  let Bounds = this.getBoundingClientRect();  
  let Icon_Center_X = Bounds.x + Bounds.width/2;
  let Icon_Top_Y = Bounds.y;
  let Icon_Label = document.getElementById('Icon_Label');
  Icon_Label.style.opacity = 1;
  let X_Position = Icon_Center_X - Dock_Left;
  Icon_Name = (String(this.id).split("_Icon")[0]).replace("_"," ");  
  Icon_Label.innerHTML = Icon_Name;
  let Name_Length = Icon_Name.length;
  let Label_Boundaries = document.getElementById('Icon_Label').getBoundingClientRect();
  let Label_Width = Label_Boundaries.width + "px";
  Icon_Label.style.left = "calc(" + X_Position + "px - " + Label_Width + "/2)";
  Icon_Label.style.top = "-3em";
}

function Icon_Left(){
  let Icon_Label = document.getElementById('Icon_Label');
  Icon_Label.style.opacity = 0;
  
  
}

// 
// function Add_Field(){
//     Field_Container = document.getElementById("Left_Panel");
//     // Creating the field object to be appended
//     let New_File_Query = document.createElement("div");
//     New_File_Query.classList.add("File_Queries");
//     let New_Field = document.createElement("input");
//     New_Field.placeholder = "Filename";
//     New_Field.spellcheck="false";
//     New_Field.classList.add("File_Fields");
//     New_File_Query.appendChild(New_Field);
//     let New_Delete_Button = document.createElement("button");
//     New_Delete_Button.classList.add("Delete_Buttons");
//     New_Delete_Button.innerHTML = "×";
//     New_Delete_Button.tabIndex = "-1";
//     New_Delete_Button.addEventListener("click",Delete_File_Query);
//     New_File_Query.appendChild(New_Delete_Button);
//     Field_Container.appendChild(New_File_Query);
//     Field_Container.scrollTop = Field_Container.scrollHeight;
// }
// 
// function Delete_File_Query(){
//     this.parentElement.remove();
// }