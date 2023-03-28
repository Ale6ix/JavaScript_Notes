/*------------Inico del curso------------*/
/* var hola = "Hola mundo";
console.log(hola);
let hello = "Hello word";
console.log(hello);
console.log(window.hola);
console.log(window.hello); */
/* var VS let
 Es una mejor practica usar let :)*/

/* console.log("********Var********");
var musica = "Rock";
console.log("EL mejor genero de musica es", musica);
{
  var musica = "Pop";
  console.log("EL mejor genero de musica es", musica);
}
console.log("EL mejor genero de musica es", musica);
console.log("********let********");
let musica2 = "Rock";
console.log("EL mejor genero de musica es", musica2);
{
  let musica2 = "Pop";
  console.log("EL mejor genero de musica es", musica2);
}
console.log("EL mejor genero de musica es", musica2);
 */

/* const */

/* let a; // Se puede inializar una variable sin valor.
const PI = 3.1416;
console.log(PI);
// const PERRO; //No se puede da ERROR!
const Objeto = {
  nombre: "Bryan Alejandro",
  edad: 21,
  genero: "Masculino",
};

const colors = ["Red", "Blue", "Green", "Yellow"];

console.log(Objeto);
console.log(colors);

Objeto.correo = "alejandro.fuentesgzm@gmail.com";
colors.push("Black");

console.log(Objeto);
console.log(colors); */

/* Strings */

/* let string = "Este es un string";

console.log(string);
console.log(string.length); //Metodos
console.log(string.toLocaleUpperCase()); //Propiedades
console.log(string.toLocaleLowerCase());
console.log(string.includes("string"));
*/

/* let nombre = "Alejandro Fuentes";
let edad = 21;

console.log("*****CONCATENACION*****");

// CONCATENAR

let saludo = "Hola mi nomnbre es " + nombre + " y tenogo la edad de " + edad;
console.log(saludo);

// CONTENIDO DINAMICO

let lista1 =
  "   <ul>  <li>Invierno</li>  <li>Primavera</li> <li>Verano</li><li>Otoño</li> </ul>";

console.log(lista1);

console.log("*****INTERPOLACION*****");
//  INTERPOLAR

let saludo2 = `Hola mi nombres es ${nombre} y tengo la edad de ${edad} años`;
console.log(saludo2);

// CONTENIDO DINAMICO

let lista2 = `
<ul>
  <li>Invierno</li>
  <li>Primavera</li>
  <li>Verano</li>
  <li>Otoño</li>
</ul>`;
console.log(lista2); */

/* Numbers */

/* let a = 2;
let b = new Number(1);
let c = 7.19;

console.log(a, b);
console.log(c.toFixed(1));
 */

/* BOOLEAN */
/* 
let verdadero = true;
let falso = false;
console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);
 */

/* NULL, UNDEFID & NaN */

let indefinida;
let nulo = null;
let nada = "Hola" * 3.7;
console.log(indefinida);
console.log(nulo);
console.log(nada);
