let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
}
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}
//animacion de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("autodidacta");
        habilidades[9].classList.add("productividad")
    }
}
//Detector de scrolling para detectar animaciones de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}
// Modifica el background del header al realizar scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 200);
});

// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_v15wqtl", "template_ciasnpa", {
        to_name: name,
        from_name: email,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Oh No...",
        text: "No olvides completar todos los campos!",
        icon: "error",
    });
}
function success() {
    swal({
        title: "El mensaje fue enviado con Exito!",
        text: "Te responderemos en unas horas",
        icon: "success",
    });
}
