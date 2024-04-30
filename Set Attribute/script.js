
let discount = document.getElementById('discount')

let time_over = false

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


star_counter(3)