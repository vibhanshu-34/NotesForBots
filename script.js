const toggle_bar = document.getElementById('toggle-bar');
const toggle_button = document.getElementById('toggle-button');
const content = document.getElementById ('content');
const home_btn = document.getElementById('home-button');




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


home_btn.addEventListener("click",function () {
  toggle_button.classList.toggle('toggle-button-off');
  toggle_bar.classList.toggle('toggle-bar-show');
  content.classList.toggle('content-show');
});

