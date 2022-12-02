let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    menu.classList.toggle("move");
}
//animacion de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("figma");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("autodidacta");
        habilidades[10].classList.add("productividad")
    }
}
    //detector de scrolling para detectar animaciones de la barra de habilidades
    window.onscroll = function(){
        efectoHabilidades();
    }
