
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
}