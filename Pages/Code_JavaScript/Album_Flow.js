
var Song_Position = 0;
var Song_Index = 0;
let State_Machine_Array = ["State_0","State_1","State_2","State_3","State_4","State_5"];

function Fast_Forward_Button_Pressed(){
  let Song_Title = document.getElementById('Song_Title');
  let Song_Array = ["Pac-Man<br><span>Eat em All</span>","The Transformers<br><span>Robots in Disguise</span>","Super Mario Bros<br><span>Coin Run</span>"];
  Song_Index = Song_Index + 1;
  Song_Index = Song_Index % Song_Array.length;
  let Next_Song_Title = String(Song_Array[Song_Index]);
  Song_Title.innerHTML = Next_Song_Title;
  
  let Covers = document.getElementsByClassName('Album_Covers');
  for(Index=0; Index < Covers.length; Index++){
    Covers[Index].classList.remove("State_0");
    Covers[Index].classList.remove("State_1");
    Covers[Index].classList.remove("State_2");
    Covers[Index].classList.remove("State_3");
    Covers[Index].classList.remove("State_4");
    Covers[Index].classList.remove("State_5");
  }
  
  var Tail_State = String(State_Machine_Array.pop());
  State_Machine_Array.unshift(Tail_State)
    
  for(Index=0; Index < Covers.length; Index++){
    Covers[Index].classList.add(State_Machine_Array[Index]);
  }
  return Song_Index, State_Machine_Array;
}

function Play_Pause_Song(){
  console.log("Play and pause song");
  let Sound_Slider = document.getElementById('Sound_Slider');
  let Volume_Percentage = parseInt(Sound_Slider.value);
  let Normalization_Factor = 1;
  let Input_Volume = (Volume_Percentage/100)*Normalization_Factor;
  console.log(Input_Volume);
  
  
}





