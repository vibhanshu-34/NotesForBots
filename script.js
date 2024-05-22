const toggle_bar = document.getElementById('toggle-bar');
const toggle_button = document.getElementById('toggle-button');
const content = document.getElementById ('content');
const footer = document.getElementById('footer');
const page1R = document.getElementById('page1R');
const page1L = document.getElementById('page1L');



toggle_button.addEventListener("click",function (){
  toggle_bar.classList.toggle('toggle-bar-show');
  content.classList.toggle('content-show');
  footer.classList.toggle('footer_hide');
  
  
  
  if (toggle_button.className === "toggle-button") {
    toggle_button.classList.toggle('toggle-button-on');
    
  } else {
    toggle_button.classList.toggle('toggle-button-off');
    page1R.classList.toggle('page1R_hide');
    page1L.classList.toggle('page1L_hide');
 
  }
  
});


const home_btn = document.getElementById('home-button');

home_btn.addEventListener("click",function () {
  toggle_button.classList.toggle('toggle-button-off');
  toggle_bar.classList.toggle('toggle-bar-show');
  content.classList.toggle('content-show');
  if (page1.classList.toggle('page1-show')) {
    page1.classList.toggle('page1-show');
  } else {
    content.classList.toggle('content-none');
  }
});

const page1_btn = document.getElementById('page1-button');
const page1 = document.getElementById('page1');


page1_btn.addEventListener("click",function () {
  toggle_bar.classList.toggle('toggle-bar-show');
  content.classList.toggle('content-show');
  page1.classList.toggle('page1-show');
  content.classList.toggle('content-none');
  
});