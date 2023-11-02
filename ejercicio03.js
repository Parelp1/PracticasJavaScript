

let numero1=parseFloat(prompt('Ingrese el primer número:',''))
let numero2=parseFloat(prompt('Ingrese el segundo número:',''))
let numero3=parseFloat(prompt('Ingrese el tercero número:',''))
let numero4=parseFloat(prompt('Ingrese el cuarto número:',''))
let numero5=parseFloat(prompt('Ingrese el quinto número:',''))
let numero6=parseFloat(prompt('Ingrese el sexto número:',''))


const numeros= [numero1,numero2,numero3,numero4,numero5,numero6]
let numero_mayor=0;

for (let e=0; e< numeros.length; e++){
    if (numeros[e] > numero_mayor){
        numero_mayor=numeros[e]
    }
}
//No me acostumbro a la sintaxis :c
document.write("El núermo más grande es el:" + numero_mayor);