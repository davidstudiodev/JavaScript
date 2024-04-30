


// const word=['html', 'css', 'js']

// const secret_word = word[Math.floor(Math.random() * word.length)]

// let cajon = document.getElementById('letra')

// let word_reveal = new Array(secret_word.length).fill(cajon)

// let letra = document.getElementById('letra').ariaValueMax.toLowerCase()


// let button = document.getElementById('button')

// button.addEventListener('click', ()=>{
//     if (secret_word.includes(word)){
//         for ( let i = 0; i < secret_word.length; i ++){
//             if (secret_word[i] === word){
//                 word_reveal[i] = word
//             }
//         }

//         if(!word_reveal.)

//     }
// })

// Lista de palabras para adivinar
const palabras = ["cobol", "python", "java", "ruby", ""];

// Seleccionar una palabra al azar
let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

// Arreglo para almacenar las letras adivinadas
let letrasAdivinadas = new Array(palabraSeleccionada.length).fill('_');

// Elementos del DOM
const letraInput = document.getElementById('letra');
const botonAdivinar = document.getElementById('button');
const mensaje = document.querySelector('.message');
const palabraSecreta = document.getElementById('secret_word');

// Función para actualizar la palabra en el DOM
function actualizarPalabra() {
  palabraSecreta.textContent = letrasAdivinadas.join(' ');
}

// Función para comprobar si la letra está en la palabra y actualizar el juego
function comprobarLetra(letra) {
  let letraEncontrada = false;
  for (let i = 0; i < palabraSeleccionada.length; i++) {
    if (palabraSeleccionada[i] === letra) {
      letrasAdivinadas[i] = letra;
      letraEncontrada = true;
    }
  }
  if (!letraEncontrada) {
    mensaje.style.display = 'block';
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 2000);
  }
  actualizarPalabra();
}

// Event listener para el botón de adivinar
botonAdivinar.addEventListener('click', function() {
  const letra = letraInput.value.toLowerCase();
  if (letra.length === 1 && letra.match(/[a-z]/)) {
    comprobarLetra(letra);
    letraInput.value = ''; // Limpiar el input después de adivinar
  } else {
    alert('Por favor, introduce una sola letra válida.');
  }
});

// Inicialización del juego
actualizarPalabra();
