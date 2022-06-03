const menu = document.querySelectorAll(".second-bar li");
const openMenu = document.querySelector(".open-menu");
const search = document.querySelector(".search");
const input = document.querySelector("input");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const body = document.querySelector("body");
const section = document.querySelector(".section-container");


menu.forEach((x) => {
  x.addEventListener("click", () => {
    switch (x.getAttribute("class")) {
      case "menu1":
        openMenu.classList.toggle("active")
        break;
      case "menu2":
          console.log(x)
        openMenu.classList.toggle("active")
        break;
      case "menu3":
        openMenu.classList.toggle("active")
        break;
      case "menu4":
        openMenu.classList.toggle("active")
        break;
    }
  });
});
console.log(search.classList=="search");

search.addEventListener("click",()=>{

    if(search.classList=="search"){
        search.classList.remove("search")
        search.classList.add("activesearch")
        input.setAttribute("placeholder","Minecraft, Knight Online, Metin 2")
    }else {        
        search.classList.remove("activesearch")
        search.classList.add("search")
        input.removeAttribute("placeholder")
        input.value = "";
        }
})

section.addEventListener("click",()=>{
    search.classList.remove("activesearch")
    search.classList.add("search")
    input.removeAttribute("placeholder")
    input.value = "";
})

openMenu.addEventListener("click",()=>{
    search.classList.remove("activesearch")
    search.classList.add("search")
    input.removeAttribute("placeholder")
    input.value = "";
})