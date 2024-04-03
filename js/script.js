function Display(Volume){
  if(Volume==0){
     document.getElementById("Output").innerHTML="Please enter valid numbers"
  } else{
     document.getElementById("Output").innerHTML="The area of this pyramid is: " + Volume.toFixed(2);
  } 
}

function Calculate(){
  let Height = document.getElementById("Height").value;
  let SideA = document.getElementById("SideA").value;
  let SideB = document.getElementById("SideB").value;
  let Volume = (1/6)*SideA*SideB*Height
  Display(Volume);
}