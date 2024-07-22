// Ejercicio 1
// function tablademultiplicar(numero) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(numero + "*" + i + "=" + (numero * i));
//     }
    
// }
// let numero = parseInt(prompt("Ingrese número a multiplicar"))
// tablademultiplicar(numero)

// Ejercicio 2
// function numerosaleatorios(numero) {
// if (numero != 0) {
//     let sumadenumeros = numero
//     while (numero !=0 ) {
//         numero = parseInt(prompt("Ingrese un número"))
//         sumadenumeros += numero   
//     } 
//     console.log(" Sumas Totales " + sumadenumeros);    
// }
// }
// let sumadenumeros = parseInt(prompt("Ingrese un número"))
// numerosaleatorios (sumadenumeros)

// Ejercicio 3
// function adivinarnumero() {
//     let numeroincognito = 10
//     let numerousuario = parseInt(prompt(" Ingrese un número "))
//     if (numeroincognito != numerousuario) {
//         let Intentosfallidos = 1
//         while (numeroincognito != numerousuario) {
//             if (numerousuario > numeroincognito) {
//                 console.log(" El número ingresado es mayor ");   
//             } else {
//                 console.log(" El número ingresado es menor ");
//             }
//             numerousuario = parseInt(prompt(" Ingrese un número "))
//             Intentosfallidos ++ 

//         } 
//         console.log(" Ganaste y tuviste " + Intentosfallidos + " intentos"); 
//     } else{
//         console.log(" Ganaste en el primer intento ");
//     }    
// }
// adivinarnumero()

// Ejercicio 4
// function esPrimo() {
//     let numero = parseInt(prompt("Ingresa un número: "));
//     if (numero <= 1) {
//       console.log(numero + " no es primo");
//       return false;
//     }
//     for (let i = 2; i <= numero / 2; i++) {
//       if (numero % i === 0) {
//         console.log(numero + " no es primo");
//         return false;
//       }
//     }
//     console.log(numero + " es primo");
//     return true;
//   }
  
//   esPrimo();
    
// Ejercicio 5
// function mostrarDivisores() {
//     let numero = parseInt(prompt("Ingresa un número: "));
//     let divisores = [];
//     for (let i = 1; i <= numero; i++) {
//       if (numero % i === 0) {
//         divisores.push(i);
//       }
//     }
//     console.log("Los divisores de " + numero + " son: " + divisores.join(", "));
//   }
  
//   mostrarDivisores();
 
// Ejercicio 6
// function recorrerArray() {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//       array.push(parseInt(prompt("Ingresa el elemento " + (i + 1) + " del array: ")));
//     }
  
//     for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   }
  
//   recorrerArray();
  
// Ejercicio 7
// function mostrarDobles() {
//     let numeros = [];
//     for (let i = 0; i < 10; i++) {
//       numeros.push(parseInt(prompt("Ingresa el número " + (i + 1) + ": ")));
//     }
  
//     for (let i = 0; i < numeros.length; i++) {
//       console.log(numeros[i] * 2);
//     }
//   }
  
//   mostrarDobles();

// Ejercicio 8
// function presentarFamilia() {
//     let familia = [];
//     for (let i = 0; i < 5; i++) {
//       let nombre = prompt("Ingresa el nombre: ");
//       let edad = parseInt(prompt("Ingresa la edad: "));
//       let relacion = prompt("Ingresa la relación: ");
//       let ocupacion = prompt("Ingresa la ocupación: ");
//       familia.push({ nombre: nombre, edad: edad, relacion: relacion, ocupacion: ocupacion });
//     }
  
//     for (let i = 0; i < familia.length; i++) {
//       let persona = familia[i];
//       console.log("Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años, soy " + persona.relacion + " y trabajo como " + persona.ocupacion + ".");
//     }
//   }
  
//   presentarFamilia();

// Ejercicio 9
// function mostrarImpares() {
//     let numeros = [];
//     for (let i = 0; i < 10; i++) {
//       numeros.push(parseInt(prompt("Ingresa el número " + (i + 1) + ": ")));
//     }
  
//     for (let i = 0; i < numeros.length; i++) {
//       if (numeros[i] % 2 !== 0) {
//         console.log(numeros[i]);
//       }
//     }
//   }
  
//   mostrarImpares();

// Ejercicio 10
// function sumaParesImpares() {
//     let sumaPares = 0;
//     let sumaImpares = 0;
//     let numero;
  
//     do {
//       numero = parseInt(prompt("Ingresa un número (0 para terminar): "), 10);
//       if (numero !== 0) {
//         if (numero % 2 === 0) {
//           sumaPares += numero;
//         } else {
//           sumaImpares += numero;
//         }
//       }
//     } while (numero !== 0);
  
//     console.log("Suma de pares: " + sumaPares);
//     console.log("Suma de impares: " + sumaImpares);
//   }
  
//   sumaParesImpares();

// Ejercicio 11
// function numeroMasGrande() {
//     let numeros = [];
//     for (let i = 0; i < 10; i++) {
//       numeros.push(parseInt(prompt("Ingresa el número " + (i + 1) + ": ")));
//     }
//     let max = numeros[0];
  
//     for (let i = 1; i < numeros.length; i++) {
//       if (numeros[i] > max) {
//         max = numeros[i];
//       }
//     }
  
//     console.log("El número más grande es: " + max);
//   }
  
//   numeroMasGrande();
  
// Ejercicio 12
// function numeroMasChico() {
//     let numeros = [];
//     for (let i = 0; i < 10; i++) {
//       numeros.push(parseInt(prompt("Ingresa el número " + (i + 1) + ": ")));
//     }
//     let min = numeros[0];
  
//     for (let i = 1; i < numeros.length; i++) {
//       if (numeros[i] < min) {
//         min = numeros[i];
//       }
//     }
  
//     console.log("El número más chico es: " + min);
//   }
  
//   numeroMasChico();

// Ejercicio 13
// function piedraPapelTijeras() {
//     let jugador1 = prompt("Nombre del jugador 1: ");
//     let jugador2 = prompt("Nombre del jugador 2: ");
//     let mano1, mano2;
  
//     while (true) {
//       mano1 = prompt(jugador1 + ", elige (piedra, papel o tijeras): ").toLowerCase();
//       mano2 = prompt(jugador2 + ", elige (piedra, papel o tijeras): ").toLowerCase();
  
//       if (mano1 === mano2) {
//         console.log("Empate, jueguen de nuevo.");
//       } else if (
//         (mano1 === "piedra" && mano2 === "tijeras") ||
//         (mano1 === "papel" && mano2 === "piedra") ||
//         (mano1 === "tijeras" && mano2 === "papel")
//       ) {
//         console.log(jugador1 + " gana!");
//         break;
//       } else {
//         console.log(jugador2 + " gana!");
//         break;
//       }
//     }
//   }
  
//   piedraPapelTijeras();

// Ejercicio 14
// function triangulo() {
//     let n = 5;
  
//     for (let i = 1; i <= n; i++) {
//       let fila = "";
//       for (let j = 1; j <= i; j++) {
//         fila += "*";
//       }
//       console.log(fila);
//     }
//   }
  
//   triangulo();
  
// Ejercicio 15
// function trianguloInvertido() {
//     let n = 5;
  
//     for (let i = n; i >= 1; i--) {
//       let fila = "";
//       for (let j = 1; j <= i; j++) {
//         fila += "*";
//       }
//       console.log(fila);
//     }
//   }
  
//   trianguloInvertido();
 
// Ejercicio 16
// function ordenarArray() {
//     let desordenados = [];
//     for (let i = 0; i < 10; i++) {
//       desordenados.push(parseInt(prompt("Ingresa el número " + (i + 1) + ": ")));
//     }
  
//     for (let i = 0; i < desordenados.length - 1; i++) {
//       for (let j = 0; j < desordenados.length - i - 1; j++) {
//         if (desordenados[j] > desordenados[j + 1]) {
//           let temp = desordenados[j];
//           desordenados[j] = desordenados[j + 1];
//           desordenados[j + 1] = temp;
//         }
//       }
//     }
  
//     console.log(desordenados);
//   }
  
//   ordenarArray();
  