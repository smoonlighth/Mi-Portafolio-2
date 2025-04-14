const hamburguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector(".nav-menu");

    hamburguesa.addEventListener("click", function() {
        hamburguesa.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function(){
        hamburguesa.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    
    