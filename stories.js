// var menuBtn = document.getElementById("menuBtn");
// var sideNav = document.getElementById("sideNav");

// sideNav.style.right = "-250px";
// menuBtn.onclick = function(){
//     if(sideNav.style.right == "-250px"){
//         sideNav.style.right = "0px";
//     }
//     else{
//         sideNav.style.right = "-250px";
//     }
// }


const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
