const distancia=parseInt(prompt("Qué tan lejos tiene que viajar? (distancia en metros)",''))

if(distancia<=1000){
    document.write("Usted puede ir a pie")
} else if(distancia>1000 && distancia<=10000){
    document.write("Es recomendable usar la bicicleta")

} else if(distancia>10000 && distancia<=30000){
    document.write("usted debe ir en colectivo")

} else if(distancia>30000 && distancia<=100000){
    document.write("usted debe ir en coche")

} else if (distancia>100000) {
    document.write("usted debe ir en avion")
}