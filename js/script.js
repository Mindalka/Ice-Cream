
var link=document.querySelector(".main-nav__user-login");
var popup=document.querySelector(".pop-up__login");
var close=document.querySelector(".pop-up__close");
var searchShow=document.querySelector(".pop-up__search");
var searchClose=document.querySelector(".pop-up__search-close");
var search=document.querySelector(".main-nav__user-search");

link.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.add("pop-up__login--show");
});

close.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.remove("pop-up__login--show");
});

search.addEventListener("click",function(event){
	event.preventDefault();
	searchShow.classList.add("pop-up__search--show");
});

searchClose.addEventListener("click",function(event){
	event.preventDefault();
	searchShow.classList.remove("pop-up__search--show");
});

