function toggleMenu(){
    const menu = document.querySelector(".menu-links");//target html document element, in this case menu-links class
    const icon = document.querySelector(".hamburger-icon ");
    menu.classList.toggle("open"); //call open css class  
    icon.classList.toggle("open");

}