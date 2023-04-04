/* ---------Ejercicio 1------------ */
// const countCharacter = function () {
//   let palabra = prompt("Ingresa una cadena de texto: ");
//   if (!palabra) {
//     alert(`ERROR! No ingresaste nada.`);
//   } else {
//     confirm(
//       `La cadena ingresada tiene un total de ${palabra.length} caracteres`
//     );
//   }
// };
// countCharacter();

/* ---------Ejercicio 2------------ */
// const trimCharacter = (long = undefined) => {
//   let word = prompt("Ingrese una cadena de texto: ");
//   !word
//     ? alert("No ingresaste ninguna cadena")
//     : confirm(`${word.slice(0, long)}`);
// };
// trimCharacter(4);

/* ---------Ejercicio 3------------ */
// const wordArray = (cadena = "", separador = undefined) => {
//   !cadena
//     ? console.warn(`No ingresaste una cadena de texto`)
//     : separador === undefined
//     ? console.warn("No ingresaste un separador")
//     : console.info(cadena.split(separador));
// };
// wordArray("Hola mundo");

/* ---------Ejercicio 4------------ */
// const repetString = (number = undefined) => {
//   let string = prompt("Ingrese una cadena");
//   !string
//     ? console.warn("No ingresaste ninguna cadena")
//     : number === undefined
//     ? console.warn("NO ingresaste el numero de repeticiones")
//     : console.info(string.repeat(number));
// };
// repetString(5);

/* ---------Ejercicio 5------------ */
// const invertirCadena = () => {
//   let cadena2 = prompt("Ingrese una cadena de texto");
//   !cadena2
//     ? console.warn("NO ingresaste ninguna cadena")
//     : console.info(cadena2.split("").reverse().join(""));
// };
// invertirCadena();

/* ---------Ejercicio 6------------ */
// const repeatWord = (cadena2 = "", texto = "") => {
//   if (!cadena2) {
//     console.warn("No ingresaste cadena");
//   } else if (!texto) {
//     console.warn("NO ingresaste texto a contar");
//   } else {
//     let contador = 0,
//       i = 0;
//     while (i != -1) {
//       i = cadena2.indexOf(texto, i);
//       if (i != 0 - 1) {
//         i++;
//         contador++;
//       }
//     }
//     return console.info(`La variable ${texto} se repite ${contador} veces`);
//   }
// };
// repeatWord("Hola mundo, mundo, mundo", "mundo");

/* ---------Ejercicio 7------------ */
// const palindromo = () => {
//   let word1 = prompt("Ingrese la palbara: ");
//   let word2 = word1.split("").reverse().join("");
//   if (!word1) {
//     alert("No ingresaste la palabra");
//   } else if (word1 === word2) {
//     confirm(`La palabra ${word1} si es una palabra palindroma`);
//   } else {
//     alert("La palabra ingresada no es una palabra palindromo");
//   }
// };
// palindromo();

/* ---------Ejercicio 8------------ */
// const remove = (cadena = "", remover = "") =>
//   !cadena
//     ? alert("No ingresaste la cadena")
//     : !remover
//     ? alert("No ingresaste el texto a remover")
//     : console.info(cadena.replace(new RegExp(remover, "ig"), ""));

// remove("xyz1,xyz2,xyz3", "xyz");

/* ---------Ejercicio 9------------ */
// const randomNumber = () => console.info(Math.round(Math.random() * 100 + 500));
// randomNumber();

/* ---------Ejercicio 10------------ */
//  const capicua = (number = 0) => {
//   if (!number) return console.warn("Number is not define");
//   if (typeof number !== "number")
//     return console.warn(`El valor ${number} is not a number`);
//   number = number.toString();
//   let numberReverse = number.split("").reverse().join("");
//   number === numberReverse
//     ? console.info("The number is capicua")
//     : console.info("The number is not capicua");
// };

// capicua();
// capicua("19");
// capicua({});
// capicua(10);
// capicua(101);
/* ---------Ejercicio 11----------- */
// const factorial = (number = undefined) => {
//   if (!number) return console.warn("Number is not define");
//   if (typeof number !== "number")
//     return console.warn(`El valor ${number} is not a number`);
//   if (number === 0)
//     return console.warn("No se puede sacar factorial de el numero 0");
//   if (Math.sign(number) === -1) return console.warn("ERROR!");
//   let factorial = 1;
//   for (let i = number; i > 1; i--) {
//     factorial *= i;
//   }
//   return console.info(`EL factorial del numero ${number} es ${factorial}`);
// };
// factorial();
// factorial("10");
// factorial(-10);
// factorial(5);
// factorial(8);
/* ---------Ejercicio 12----------- */
// const numeroPrimo = (number = undefined) => {
//   if (!number) return console.warn("Number is not define");
//   if (typeof number !== "number")
//     return console.warn(`El valor ${number} is not a number`);
//   if (number === 0)
//     return console.warn("No se puede sacar factorial de el numero 0");
//   if (Math.sign(number) === -1) return console.warn("ERROR!");
//   let div = false;
//   for (let i = 2; i > number; i++) {
//     if (number % i === 0) {
//       div = true;
//       break;
//     }
//   }
//   return div
//     ? console.info("EL numero no es primo")
//     : console.info("EL numero es primo");
// };
// numeroPrimo();
// numeroPrimo(7);
/* ---------Ejercicio 13----------- */
// const parImpar = (numero = undefined) => {
//   if (!numero) return console.warn("Number is not define");
//   if (typeof numero !== "number")
//     return console.warn(`El valor ${numero} is not a number`);

//   return numero % 2 === 0
//     ? console.info(`el ${numero} es par`)
//     : console.info(`el ${numero} es impar`);
// };
// parImpar();
// parImpar(2);
// parImpar(23);
// parImpar(22);
/* ---------Ejercicio 14----------- */

// const grados = (grados = undefined, unidad = "") => {
//   if (grados === undefined) return console.warn("NO ingresaste los grados");
//   if (!unidad) return console.warn("NO ingresaste la unidad");
//   if (typeof grados !== "number")
//     return console.warn("No es el tipo de dato que se espera calcular");
//   if (typeof unidad !== "string")
//     return console.warn("No es el tipo de dato que se espera calcular");
//   if (unidad.length !== 1 || !/C|F/.test(unidad))
//     return console.warn("No es el tipo de dato que se espera calcular");

//   if (unidad === "C")
//     return console.info(
//       `${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F `
//     );
//   if (unidad === "F")
//     return console.info(
//       `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
//     );
// };
// grados(100, "C");
// grados(0, "F");

/* ---------Ejercicio 15----------- */
// const convercion = (numero = undefined, base = undefined) => {
//   if (numero === undefined) console.warn("No ingresaste un numero");
//   if (typeof numero !== "number")
//     console.warn("NO es el tipo de dato que se espera");
//   if (base === undefined) console.warn("No ingresaste una base");
//   if (typeof base !== "number")
//     console.warn("NO es el tipo de dato que se espera");
//   if (base === 2) {
//     return console.info(
//       `El  ${numero} base: ${base} = ${parseInt(numero, base)} base : 10`
//     );
//   } else if (base === 10) {
//     return console.info(
//       `El  ${numero} base: ${base} = ${numero.toString(2)} base : 2`
//     );
//   }
// };
// convercion();
// convercion(10);
// convercion(10, 10);
// convercion(4, 10);
// convercion(100, 2);
/* ---------Ejercicio 16----------- */
// const descuento = (precio = undefined, descuento = undefined) => {
//   if (precio === undefined) return console.warn("No ingresaste el precio");
//   if (typeof precio !== "number")
//     return console.warn("No ingresaste un numero");
//   if (Math.sign(precio) === -1) console.warn("El precio no puede ser negativo");
//   if (descuento === undefined)
//     return console.warn("No ingresaste el descuento");
//   if (typeof descuento !== "number")
//     return console.warn("No ingresaste un numero");
//   if (Math.sign(descuento) === -1)
//     console.warn("El descuento no puede ser negativo");
//   let total = precio - (precio * descuento) / 100;
//   return console.info(`El total a pagar es de: ${total}`);
// };
// descuento(1000, 20);
/* ---------Ejercicio 17----------- */

// const calcularAnios = (fecha = undefined) => {
//   if (fecha === undefined) return console.warn("No ingresaste la fecha");
//   if (!(fecha instanceof Date)) return console.warn("No es una fecha");
//   let hoyMenosFecha = new Date().getTime() - fecha.getTime();
//   let aniosEnMls = 1000 * 60 * 60 * 24 * 365;
//   let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMls);
//   return Math.sign(aniosHumanos) === -1
//     ? console.info(
//         `Faltan ${Math.abs(
//           aniosHumanos
//         )} años para el año ${fecha.getFullYear()}`
//       )
//     : Math.sign(aniosHumanos) === 1
//     ? console.info(
//         `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
//       )
//     : console.info("No hay diferencia");
// };
// calcularAnios();
// calcularAnios({});
// calcularAnios(true);
// calcularAnios(new Date());
// calcularAnios(new Date(2002, 2, 17));
// calcularAnios(new Date(2001, 8, 25));
// calcularAnios(new Date(1000, 0, 1));
// calcularAnios(new Date(2050, 0, 1));

/* ---------Ejercicio 18----------- */
/* ---------Ejercicio 19----------- */
/* ---------Ejercicio 20----------- */
