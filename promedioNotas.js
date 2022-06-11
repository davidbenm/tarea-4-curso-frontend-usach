notas = [6, 8, 9, 2, 5, 10];
let suma = 0;

function sumaNotas(conjuntoASumar) {
    for (i = 0; i < conjuntoASumar.length; i++) {
        suma = suma + conjuntoASumar[i];    
    }
    return suma
}

function promedioNotas() {
    promedio = suma / notas.length;
    return promedio.toFixed(2) // redondeado el promedio a dos lugares decimales
}

suma = sumaNotas(notas);
promedio = promedioNotas();

console.log("La suma de las notas es: ", suma);
console.log("El promedio de las notas es: ", promedio);