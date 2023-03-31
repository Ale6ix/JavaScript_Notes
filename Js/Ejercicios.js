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
