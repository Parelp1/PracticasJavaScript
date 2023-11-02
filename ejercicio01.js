const nombre= prompt("Ingrese su nombre:",'')
const edad= parseInt(prompt("Ingrese su edad:",''))

if(edad < 18){
    document.write(`${nombre}, no tenes edad para conducir`)
} else{
    document.write(`Feñicidades ${nombre}! Tenes edad para conducir.`)
}


