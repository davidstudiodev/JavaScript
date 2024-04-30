let precio = parseInt(document.getElementsByTagName("h4")[0].textContent)

let buttonSub = document.getElementById('sub')

let buttonAdd = document.getElementById('add')

let buttonTotal = document.getElementById('total')

let count = document.getElementById('count')

buttonSub.addEventListener('click',()=>{
    if(parseInt(count.textContent) != 0){
        count.textContent = parseInt(count.textContent)-1
        total.textContent = parseInt(count.textContent) * precio 
    }
})

buttonAdd.addEventListener('click',()=>{
    if(parseInt(count.textContent) != 0){
        count.textContent = parseInt(count.textContent)+1
        total.textContent = parseInt(count.textContent) * precio 
    }
})

let total = document.getElementById('totalprecio')

buttonTotal.addEventListener('click',()=>{
    total.textContent = parseInt(count.textContent) * precio 
})


let colores = document.getElementById('colores')

let img_prod = document.getElementById('img-prod')

let valor_precio = document.getElementById('valor_precio')



colores.addEventListener('change', () => {
    if ( colores.value == 'rojo' ){
        img_prod.src = "https://izicop.com/cdn/shop/products/image_e91dfd8f-29e3-44b8-9c4d-0fda779555e1.png?v=1628900141"

        precio = 500
        valor_precio.innerHTML = precio
    }

    if ( colores.value == 'blanco' ){
        img_prod.src = "https://newcop.com/cdn/shop/files/Air-Jordan-3-Craft-Ivory_grande.png?v=1707062214"

        precio = 700
        valor_precio.innerHTML = precio
    }

    if ( colores.value == 'azul' ){
        img_prod.src = "https://izicop.com/cdn/shop/products/snakerstoreAir_Jordan_1_Mid_Ice_Blue-555112-401-0.png?v=1666775288"

        precio = 600
        valor_precio.innerHTML = precio
    }
    
})

