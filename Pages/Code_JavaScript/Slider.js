
function Adjust_Slider_Background(){
  let Current_Value = parseInt(this.value);
  let Offset = Math.abs(Current_Value - 50) *0.1;
  if(this.value < 50){
    Offset = -1 * Offset;
  }
  let Percentage = parseInt(this.value) - Offset;
  let Slider_Name = String(this.id);
  let Background_Property_String = "linear-gradient(to right, rgba(250,250,250,1) 0%, rgba(250,250,250,1)" + Percentage + "% , rgba(0,0,0,0.1)" +  Percentage + "%, rgba(0,0,0,0.1) 100%)";
  this.style.background = Background_Property_String;

  if(String(this.id).includes("Display_Slider")){
    let Brightness_Factor = parseInt(this.value)/100 + 0.2;
    document.body.style.filter = "brightness(" + String(Brightness_Factor) + ")";    
  }
}

function Get_Current_Volume(){
  let Volume_Level = parseInt(document.getElementById('Sound_Slider').value);
  return Volume_Level;
}

function Play_Button_Pressed(){
  console.log("Play button pressed");
  
}


var Song_Index = 0;
function Fast_Forward_Button_Pressed(){
  let Song_Title = document.getElementById('Song_Title');
  let Song_Array = ["The Transformers<br><span>Robots in Disguise</span>","Super Mario Bros<br><span>Coin Run</span>","Pac-Man<br><span>Eat em All</span>"];
  Song_Index = Song_Index + 1;
  Song_Index = Song_Index % Song_Array.length;
  let Next_Song_Title = String(Song_Array[Song_Index]);
  Song_Title.innerHTML = Next_Song_Title;
  return Song_Index;
}