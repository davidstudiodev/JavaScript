// Elemento HTML para contador
let counter = document.getElementById('counter')


let box = document.getElementById('box')


let clicks = document.getElementById('clicks')



// Variable para contar númeor de clicks

let num_clicks = 0

// Variable para verificar si el tiempo ha terminado

let time_over = false

// Colores para cambiar fondo

let colors = ['red', 'green', 'blue', 'yellow']

// Número aleatorio para seleccionar color

let random = Math.floor(Math.random() * colors.length) // Función para iniciar contador


function star_counter(seconds) {
    counter.innerHTML = seconds // Mostrar contador en la página

    if ( seconds == 0){ // Si es acaba el tiempo..
        counter.innerHTML = 'Time Over' // Mensaje en la página
        time_over = true
        return // Detener la ejecución de la función

    }

    // Llamar recursivamente a la función con el tiempo reducido en 1 segundo

    setTimeout(()=>{
        star_counter(seconds-1)
    }, 1000)

}

box.addEventListener('click', ()=>{ // Al hacer click en la caja
    if ( !time_over){
        box.setAttribute('class', colors [random])
        random = Math.floor(Math.random() * colors.length)
        clicks.innerHTML = num_clicks += 1
    }
})

star_counter(10)