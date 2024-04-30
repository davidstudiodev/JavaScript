let opciones = document.getElementById('formulario')

let formulario1 = document.getElementById('form1')

let formulario2 = document.getElementById('form2')

let formulario3 = document.getElementById('form3')

opciones.addEventListener("change", () => {
    
    if (opciones.value == "trabajo"){
        formulario1.style.display = "flex";
        formulario2.style.display = "none";
        formulario3.style.display = "none";
    }

    if (opciones.value == "suscripcion"){
        formulario2.style.display = "flex";
        formulario1.style.display = "none";
        formulario3.style.display = "none";
    }

    if (opciones.value == "personal"){
        formulario3.style.display = "flex";
        formulario1.style.display = "none";
        formulario2.style.display = "none";
    }

})