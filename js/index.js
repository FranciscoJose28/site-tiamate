
function abreFechaMenu(){
    let nav = document.querySelector("#menu");
    let icon = document.querySelector("#menuBtn");
    let iconFechar = document.querySelector("#menuBtnFechar");

    if(nav.classList.value.split(" ").includes("-left-[270px]")){
        nav.classList.remove("-left-[270px]");
        nav.classList.add("left-[0px]");
        icon.classList.add("hidden");
        iconFechar.classList.remove("hidden");
    } else {
        nav.classList.remove("left-[0px]");
        nav.classList.add("-left-[270px]");
        icon.classList.remove("hidden");
        iconFechar.classList.add("hidden");
    }
}