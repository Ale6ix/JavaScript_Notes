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

/* let indefinida;
let nulo = null;
let nada = "Hola" * 3.7;
console.log(indefinida);
console.log(nulo);
console.log(nada); */

/* FUNCTIONS */

/* 
Una funciones es un bloque de codigo, autocontenido que se puede definir una vez y ejecutar en cualquier momento Opcionalmente, una funcion puede aceptar parametros y devolver un valor

Las funciones en JavaScript son objetos, un tipo especial de objetos: 

Se dice que las funciones son ciudadanos de primera clase porque pueden pasarse como argumentos y usarse como valor de retorno. 
*/

/*  Declaradas */

/* function estoEsUnaFunction() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
} */

/* Invocacion de funciones */

/* estoEsUnaFunction();
estoEsUnaFunction();
estoEsUnaFunction();
estoEsUnaFunction();

function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  return "La funciones ha retornado una cadena de texto";
  console.log("cuatro");
  console.log("cinco");
  console.log("seis");
} */

/* 
Cuando una funcione, encuentra la palabra resevada return, ignora las lines de codigo que hay detras de ella. 
*/

// let valoDeFuncion = unaFuncionQueDevuelveValor();
// console.log(valoDeFuncion);

/* function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("Alejandro", 21);
saludar();

funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parde del codigo; incluso antes de que la funcion sea declarada."
  );
}

funcionDeclarada(); */

/* EXPRESADAS */

/* Esta tambien es una funcion anonima, puesto que no tiene Nombre */

/* funcionExpresada(); */

/* const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir una funcion que se le a asignado como valor una variable, si invocamos esta funcion antes de su definicion, Js nos tirara ERROR"
  );
};

funcionExpresada(); */

/* 
Para mejor practica es mejor usar una funcion expresada.
*/

/* ARRAY */

/* const a = [];
console.log(a);

const frutas = ["manzana", "pera", "sandia"];
console.log(frutas);

const arregloDentroDeOtro = [1, "Hola", ["a", "b"]];
console.log(arregloDentroDeOtro);
console.log(arregloDentroDeOtro.length);
 */
// Navegar dentro del arreglo

/* console.log(arregloDentroDeOtro[1]);
console.log(arregloDentroDeOtro[2][1]);

const b = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(b);

const c = Array(100).fill(false);
console.log(c);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});
 */

/* OBJECTS */

// const objeto = {};
// console.log(objeto);

/* 
Dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos
*/

/* const alex = {
  nombre: "Bryan",
  apellido: "Fuentes",
  edad: 21,
  pasatiempos: ["Entrenar", "Estudiar", "VideoGames"],
  soltero: true,
  contactos: {
    email: "branmon35@gmail.com",
    twiter: "@AlejandroFuentes",
    movil: "52 8138123456",
  },
  saludar: function () {
    console.log(
      /* 
      La palabra this de una funcion se comporta un poco diferente en comparacion con otros lenguajes. Ademas tiene algunas diferencias entre el mosoestricto y el modo no estricto.

      si quieres mas informacion visitar: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
      */
/*      `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  },
};

console.log(alex);
console.log(alex.nombre);
console.log(alex.contactos);
alex.saludar();
 */

/* TIPOS DE DATOS */

/* 
Operadores Aritmeticos: +, -, *, /, %. 
*/

// let a = 10000 + 5 - (20 * 2) / 2;
// console.log(a);

/* 
OPERADORES RELACIONALES: <, =, >, <=, >=, ==, ===, !=,!==  
*/

/* console.log(5 < 10);
console.log(5 <= 2);
console.log(5 > 20);
console.log(5 >= 1);
console.log(5 >= 1);
 */
/* 
= 1 igual es asignacion
== 2 iguales es comparación de valores
=== 3 iguales es comparacion de valores y tipo de dato.
*/

/* console.log(7 == 7);
console.log("7" == 7);
console.log("7" === 7);
*/

/* INCREMENTO Y DECREMENTO */

// let i = 5;

// i += 1;

// operador unario
// i++;

// console.log(i);

// let b = 5;

// b -= 1;

// operador unario
// b--;

// console.log(b);

/*
OPERADORES LOGICOS: }
1.-&& AND: Cuando tenga una o mas condiciones se vuelve verdadesero cuando todas sean verdadero 
2.-|| OR: Cuando tenga una o mas condiciones se vuelve verdadesero cuando unde de esas sea verdadero 
3-! NOT: Niega, es decir lo que es verdadero lo vuelve falso y viceversa 
*/

/* console.log(!true);
console.log(!false);
console.log(1 === 1 || "1" === 1);
console.log(1 === 1 && "2" === 2);
 */

/* CONDICIONALES */

/* if-else */
/* 
const estoEsUnIf = function (edad) {
  if (edad >= 18) {
    console.log(`Hola tienes la edad de ${edad}  puedes pasar`);
  } else {
    console.log(`Hola tienes la edad de ${edad}  no puedes pasar`);
  }
};

estoEsUnIf(12);
 */
/* if-else if */

/* 
Dejame dormir 0hrs - 5hrs
Buenos dias 6hrs - 11hrs.
Buenas tardes 12hrs - 18hrs
Buenas noches 19hrs - 23hrs 
*/

/* const ifAninado = function (hora = 0) {
  if (hora >= 0 && hora <= 5) {
    console.log("Dejame dormir");
  } else if (hora >= 6 && hora <= 11) {
    console.log("Buenos dias");
  } else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
  } else if (hora >= 19 && hora <= 23) {
    console.log("Buenas tardes");
  }
};
ifAninado(12); */

/* switch case */

/* 
Domingo = 0
Lunes = 1
Martes = 2
Miercoles = 3
Jueeves = 4
Viernes = 5
Sabado = 6
*/
/* 
const diaDeLaSemana = function (dia = 0) {
  switch (dia) {
    case 0:
      console.log("Hoy es domingo");
      break;
    case 1:
      console.log("Hoy es lunes");
      break;
    case 2:
      console.log("Hoy es martes");
      break;
    case 3:
      console.log("Hoy es miercoles");
      break;
    case 4:
      console.log("Hoy es jueves");
      break;
    case 5:
      console.log("Hoy es viernes");
      break;
    case 6:
      console.log("Hoy es sabado");
      break;
    default:
      console.log(
        "El numero ingresado no esta disponible, vuelva a escoger un numero de 0 a 6"
      );
      break;
  }
};
diaDeLaSemana(6);
 */

/* CICLOS(LOOPS) */

/* while */

/* let contador = 0;

while (contador < 10) {
  contador++;
  console.log(contador);
}

/* Do while */
/* do {
  contador++;
  console.log(contador);
} while (contador < 10);
 */

/* for (i = 0; i <= 10; i++) {
  console.log(i);
}

let numero = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (i = 0; i < numero.length; i++) {
  console.log(numero[i]);
}

const alex = {
  nombre: "Bryan",
  apellido: "Fuentes",
  edad: 21,
};
for (const key in alex) {
  console.log(alex[key]);
}
console.log("forof");
for (const i of numero) {
  console.log(i);
}
 */

/*Manejo de errores */

/* try {
  console.log("En el try se agrega se agrega el codigo a evaluar");
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally {
  console.log("EL bloque del finally se ejecutara siempre, tenga o no error");
}
 */
/* ERROR PERSONALIZADO */

/* try {
  let numero = 10;
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log("Se produjo el siguiente error: " + error);
}
 */

/* break and continue */

/* const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < numero.length; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(numero[i]);
  }
}
 */

/* Destructuracion */

/* Sin destructuracion */
/* const numero = [1, 2, 3];
let uno = numero[0],
  dos = numero[1],
  tres = numero[2];
console.log(uno, dos, tres);

/* Con destructuracion */
/* let [one, two, three] = numero;
console.log(one, two, three);

const pet = {
  name: "Milka",
  age: 4,
  breed: "standfordshire-Bullterrier",
}; */
/* Es importante que al imprimir los datos los nombres del objeto y los nombres de destructuracion sean iguales */
// let { name, age, breed } = pet;
// console.log(`Name: ${name} | Age: ${age} | Breed: ${breed}`);

/* Parametros REST y Operador */

/* Parametro REST */

/* function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8));
 */
/* Operador */

/* const arr = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr, arr2);
const arr3 = [arr, arr2],
  arr4 = [...arr, ...arr2];
console.log(arr3);
console.log(arr4);
 */

/* ARROW FUNCTIONS */

// FUcncion anonima

/* const saludar = function () {
  console.log("Hola");
}

saludar();
 */
// Arrow

/* const saludar2 = () => {
  console.log("Hola");
}

saludar2();
 */
// Se puede quitar las llaves sis solo tiene una instruccion

/* const saludar3 = () => console.log("Hola");

saludar3(); */

/* Cuando una funcion felcha recibe un solo parametro, no es necesario poner parentesis */

/* const saludar4 = nombre => console.log(`Hola ${nombre}`);
saludar4("Alejandro");
 */

/* Cuando una arrow function tiene variuas lineas de codigo, hay que respetar el cuerpo de la funcion */
/* 
const sumaREST = (a, b, ...c) => {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
};
console.log(sumaREST(1, 2));
console.log(sumaREST(1, 2, 3, 4));
console.log(sumaREST(1, 2, 3, 4, 5));
console.log(sumaREST(1, 2, 3, 4, 5, 6));
console.log(sumaREST(1, 2, 3, 4, 5, 6, 7));
console.log(sumaREST(1, 2, 3, 4, 5, 6, 7, 8));
 */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
numeros.forEach((el, index) => {
  console.log(`${el}, esta en la posicion ${index}`);
});
 */

/* PROTOTIPOS */

/* 
POO
clases-Metodo a seguir
  Objetos-Es una instancia de una clase
    Atributos-Es una caracteristica o opropiedad del objeto-
      Los atributos son variables dentro de un objeto
    Metodos-Son las acciones que un objeto puede realizar
      los metodos son funciones dentro de un objeto
*/

/* ESTO NO ES FUNCIONAL, PUES PORQUE HAY PEGAR Y COPIAR. */

/* const animal = {
  nombre: "Snooppy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};
const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

console.log(animal);
console.log(animal2);
 */

// Funcion Constructora
/* function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}
// Metodos
Animal.prototype.sonar = function () {
  console.log("Hago sonido porque estoy vivo");
}; */

/* Herencia prototipica */
/* function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
} */

// Perro esta heredando de Animal.
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;
// Sobreescritura de metodo del
/* Perro.prototype.sonar = function () {
  console.log("Mi sonido es un ladrido, porque soy un perro");
};
Perro.prototype.ladrar = function () {
  console.log("wouf");
};

const snoppy = new Perro("Snoppy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoppy);
snoppy.sonar();
snoppy.ladrar();
console.log(lolaBunny);
 */

/* Clases y Objetos */

/* class Animal {
  constructor(nombre, genero) { */
// atributos
//   this.nombre = nombre;
//   this.genero = genero;
// }
// Metodos
/*   sonar() {
    console.log("Hago sonido porque estoy vivo");
  }
  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) { */
// Con el metodo super se manda a llamar el constructor de la clase padre
/*     super(nombre, genero);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log("Mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Wouf");
  }
}

const mimi = new Animal("Mimi", "Hembra"),
  scobby = new Perro("Scobby", "Macho", "Gigante");

console.log(mimi);
console.log(scobby);

mimi.sonar();
mimi.saludar();
scobby.sonar();
scobby.saludar();
scobby.ladrar();
 */
