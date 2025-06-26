document.title = "DOM in JS";
document.body.style.backgroundColor="green";
// document.body.style.backgroundImage="url('backgroundimg.png')";
document.body.style.backgroundImage="url('backgroundimg.png')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundSize="cover";
document.getElementById("header").innerHTML = "Welcom to DOM";
document.getElementById("header").style.border ="2.5px solid black";
document.getElementById("header").style.color="silver"
document.getElementById("header").style.textAlign="center";
document.getElementsByTagName("img")[0].style.padding="5px 45% 5px 45%";
document.getElementsByTagName("img")[0].style.height="150px"
document.getElementsByTagName("img")[0].style.width="150px"
document.getElementById("para").innerHTML = "Welcome to MRCET";
document.getElementById("para").style.color = "gold";
document.getElementById("para").style.fontSize = "30px";
document.getElementsByClassName("dspn")[0].innerHTML="The Branches in Our Collage";
document.getElementsByClassName("dspn")[0].style.color="black";
document.getElementsByClassName("csd")[0].style.color="orange";
document.getElementsByClassName("cs")[0].style.color="darkBlue";
document.getElementsByClassName("csm")[0].style.color="brown";
document.getElementsByClassName("it")[0].style.color="grey";
let mrcet=document.getElementsByClassName("one");
mrcet[0].style.color="yellow"
mrcet[1].style.fontSize="2em"
mrcet[2].style.fontFamily="TimesNewRomen"
mrcet[0].style.textAlign="center";
document.querySelector(".query").style.color="white"
document.querySelector(".query").style.fontSize="4em"
document.querySelectorAll(".query")[2].style.color="red"
document.querySelectorAll(".query")[1].style.color="orange"
document.querySelectorAll(".query")[3].style.color="gold"
document.querySelectorAll(".query")[4].style.color="darkGreen"
let Anime=document.querySelectorAll(".anime");
Anime[0].style.color="silver";
Anime[1].style.color="orange";
Anime[2].style.color="gold";
Anime[3].style.color="navy";
Anime[4].style.color="peru";
function changeBackground() {
   if( document.body.style.backgroundColor==="pink"){
    document.body.style.backgroundColor="yellow";
   } else {
    document.body.style.backgroundColor="pink"
   }
 }

 function changetext(){
  document.getElementById("clg").style.backgroundColor = "yellow";
  document.getElementById("clg").innerHTML = "ONE PIECE , NARUTO";
  document.getElementById("clg").style.color="red";
  document.getElementById("clg").style.fontSize = "30px";
  document.getElementById("clg").style.textAlign="center";

 
 }