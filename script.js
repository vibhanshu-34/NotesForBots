const toggle_bar = document.getElementById('toggle-bar');
const toggle_button = document.getElementById('toggle-button');
const content = document.getElementById ('content');


toggle_button.addEventListener("click",function (){
  toggle_bar.classList.toggle('toggle-bar-show');
  content.classList.toggle('content-show');
 
  
  
  if (toggle_button.className === "toggle-button") {
    toggle_button.classList.toggle('toggle-button-on');
  } else {
    toggle_button.classList.toggle('toggle-button-off');
  }
  
});


const home_btn = document.getElementById('home-button');

home_btn.addEventListener("click",function () {
  
});

const page1_btn = document.getElementById('page1-button');
const page1 = document.getElementById('page1');

page1_btn.addEventListener("click",function () {
  page1.classList.toggle('page1-show');
  content.classList.toggle('content-none');
  
});