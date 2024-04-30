/*
    Dado un array l = [19, 29, 39, 40, 50]
    Busca dentro del array el número 39 y escribe en pantalla las ver que aparece

*/

// let l = [10, 20, 30, 40, 50];
// let numero;
// let position;

// for (let i = 0; i < l.length; i++) {
//     if (l[i] == 70){
//         numero = l[i]
//         position = i
//     }
    
//     else{
//         console.log('No esta');
//     }
    
// }

// console.log('El número es', numero, 'está en la posición', position);



// let l1 = [10, 20, 30, 40, 50]
// let l2 = [10, 20, 30, 40, 50]

// function buscador (numero, lista) {
//     let num
//     let pos
//     let cont

//     for (let i = 0; i < lista.length; i++) {
//             if (lista[i] == numero){
//                 num = lista[i]
//                 pos = i
//                 cont++
//             }
//         }

//         if (num == 0) {
//             console.log('No se ha encontrado el número', numero, 'en la lista.');
//         }

//         else {
//             console.log('El numero', numero, 'esta en la lista, y esta en position', pos, 'ademas aparece', cont, 'veces.');
//         }
    
// }

// buscador(50, l1)

/*
    Crea una función que dada a una lista pasada como parámetro, imprima por consola la suma de todos los elementos de la lista, indique cuales son pares y cuales impares y si la sima final es par o impar.
*/

let lista = [1, 7, 2, 9, 4, 5]

function suma (lista) {

        let cont = 0
    
        for (let i = 0; i < lista.length; i++) {
                if (lista[i]% 2 == 0){
                    console.log("El número," i, "es par.");
            
                else {
                    console.log("El número," lista[i], "es par.");
                }
                
                }
            
            }
        }