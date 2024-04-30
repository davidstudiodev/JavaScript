// console.log("Hola Mundo");

let nombres = ['Fortu']

// Introducir elemento nuevo en el array al final.

nombres.push('Pepe')
nombres.push('Ana')

// Intriducir elemento nuevo en el array en el principio.

nombres.unshift('Primero')

// Eliminar un elemento del array (el último)

nombres.pop()

// Eliminar un elemento del array (el primero)

nombres.shift()

// Ordenar los elementos del array con sort.

nombres.push('Andrés', 'Carlos', 'David')
nombres.sort()

// console.log(nombres);


/////////////////////////

let personas = {
    nombre: 'Fortu',
    edad: 90,
    c_fav: 'Macarrones',
    casado: false,
    peso: 100,
    amigos: ['Gato', 'PC', 'Luis']
}


let alumnos = [
    {
        nombre: 'Aldefer',
        edad: 32,
        c_fav: 'Macarrones',
        casado: false,
        peso: 90,
        amigos: ['Jhony', 'David', 'Luis']
    },

    {
        nombre: 'Jhony',
        edad: 31,
        c_fav: 'Paella',
        casado: true,
        peso: 70,
        amigos: ['Gato', 'Perro', 'Raul']
    },

    {
        nombre: 'Nico',
        edad: 22,
        c_fav: 'Sandwich',
        casado: false,
        peso: 100,
        amigos: ['Raul', 'Mirando', 'Luis']
    },

    {
        nombre: 'Raul',
        edad: 24,
        c_fav: 'Pasta',
        casado: false,
        peso: 120,
        amigos: ['Jhony', 'David', 'Miranda']
    },

    {
        nombre: 'Jordi',
        edad: 19,
        c_fav: 'Pizza',
        casado: false,
        peso: 90,
        amigos: ['Nico', 'Raul', 'Luis']
    }

]

// console.log(alumnos);

// Ej_1. Dado el array de objetos recién creado crea una función que devuelva un nuevo array con todos los alumnos casados.

lista_casados = []

function casados() {

    let lista_casados = []
    for (let i= 0; i < alumnos.length; i++) { //Recorrer el array de inicio a fin
        if (alumnos[i].casado == true) {
            lista_casados.push(alumnos[i].nombre)
        }
    }
    console.log('Alumnos casados: ', lista_casados);   
}

casados()

// Ej_2. Dado el array de objetos recién creado imprimir por consola la media de edad de todos los alumnos.

function media() {
    let edad_media = 0
    for (let i= 0; i < alumnos.length; i++) { //Recorrer el array de inicio a fin
        edad_media += alumnos[i].edad; {
            
        }
    }
    console.log();   
}



/////////////////////////////

// Obtener número aleatorio

let aleatorio = Math.floor(Math.random()* alumnos.length)
console.log('Número aleatorio: ', aleatorio)

console.log('Alumno aleatroio: ', alumnos[aleatorio].nombre);


// Ej_3. Dado el array de objetos, crea una función que imprima por consola algún amigo de los alumnos mayores de 18.


function amigos() {
    
    for (let i= 0; i < alumnos.length; i++) { //Recorrer el array de inicio a fin
        if (alumnos.edad > 18) {
            let aleatorio = Math.floor(Math.random()* alumnos.length)
            console.log('Número aleatorio: ', aleatorio)

            console.log('Amigo aleatroio: ', alumnos[aleatorio].amigos);
        }
    }   
}

console.log('Amigo aleatorio: ', amigos())