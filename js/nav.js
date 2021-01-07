var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu-nav");
var btn_lines = document.getElementById("btn-lines");
var main = document.getElementById("main");
var panel = document.getElementById("panel");
var body = document.getElementById("body");

menuBtn.onclick = function() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        btn_lines.classList.remove("active");
        main.classList.remove("active");
        panel.classList.remove("active");
        body.classList.remove("active");
    } else {
        menu.classList.add("active");
        btn_lines.classList.add("active");
        main.classList.add("active");
        panel.classList.add("active");
        body.classList.add("active");
    }    
};