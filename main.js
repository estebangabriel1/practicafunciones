
//EJERCICIOS DE FUNCIONES

//1:

function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}


//2:
function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }

   
  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  //3:
  function esPalindromo(cadena) {
    const longitud = cadena.length;
    for (let i = 0; i < longitud / 2; i++) {
      if (cadena[i] !== cadena[longitud - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(esPalindromo("radar")); // Devuelve true
console.log(esPalindromo("Hola mundo")); // Devuelve false


  //4: 
  function generarNumeroAleatorio() {
    var min = 1;
    var max = 10;
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
  }
  
  console.log(generarNumeroAleatorio()); // Devuelve un número aleatorio entre 1 y 10


//EJERCICIOS DE ARREGLOS:

//Función "obtenerSuma":
function obtenerSuma(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }

  
//Función "obtenerPares":
function obtenerPares(arreglo) {
    var pares = [];
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
      }
    }
    return pares;
  }

//Función "obtenerPromedioPonderado":
function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
      throw new Error('Los arreglos de notas y pesos deben tener la misma longitud.');
    }
  
    var sumaPonderada = 0;
    var sumaPesos = 0;
    for (var i = 0; i < notas.length; i++) {
      sumaPonderada += notas[i] * pesos[i];
      sumaPesos += pesos[i];
    }
  
    var promedioPonderado = sumaPonderada / sumaPesos;
    return promedioPonderado;
  }

//Función "obtenerMaximo":
function obtenerMaximo(arreglo) {
    if (arreglo.length === 0) {
      throw new Error('El arreglo debe contener al menos un número.');
    }
  
    var maximo = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
  
    return maximo;
  }

  // Ejemplo de uso de la función obtenerSuma
var numeros = [2, 4, 6, 8, 10];
console.log(obtenerSuma(numeros)); // Devuelve 30

// Ejemplo de uso de la función obtenerPares
var numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(obtenerPares(numeros2)); // Devuelve [2, 4, 6, 8, 10]

// Ejemplo de uso de la función obtenerPromedioPonderado
var notas = [75, 80, 90, 85];
var pesos = [0.3, 0.3, 0.2, 0.2];
console.log(obtenerPromedioPonderado(notas, pesos)); // Devuelve 82.5

// Ejemplo de uso de la función obtenerMaximo
var numeros3 = [5, 9, 2, 1, 7];
console.log(obtenerMaximo(numeros3)); // Devuelve 9


//EJERCICIO DE OBJETOS:
var producto = {
    nombre: "Nombre del producto",
    precio: 0,
    cantidad: 0
  };

  function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
  }

  var persona = {
    nombre: "Nombre de la persona",
    edad: 0,
    profesion: "Profesión de la persona"
  };

  function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
  }
  
  function esMayorEdad(persona) {
    return persona.edad >= 18;
  }

  // Ejemplo de uso de la función calcularTotal
var miProducto = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 2
  };
  console.log(calcularTotal(miProducto)); // Devuelve 50
  
  // Ejemplo de uso de la función presentarPersona
  var miPersona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  };
  presentarPersona(miPersona); // Muestra en la consola la presentación de la persona
  
  // Ejemplo de uso de la función esMayorEdad
  var otraPersona = {
    nombre: "María",
    edad: 16,
    profesion: "Estudiante"
  };
  console.log(esMayorEdad(otraPersona)); // Devuelve false
  

  //Ejercicios utilizando Funciones, Arreglos y Objetos:


  //Determinar si un número es positivo, negativo o cero:
  function determinarSigno(numero) {
    if (numero > 0) {
      return "El número es positivo";
    } else if (numero < 0) {
      return "El número es negativo";
    } else {
      return "El número es 0";
    }
  }
  
  //Determinar si un número es primo:
  var numero = prompt("Ingrese un número: ");
  var mensaje = determinarSigno(numero);
  console.log(mensaje);

  function esPrimo(numero) {
    if (numero <= 1) {
      return "El número no es primo";
    }
  
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return "El número no es primo";
      }
    }
  
    return "El número es primo";
  }
  
  var numero = prompt("Ingrese un número: ");
  var mensaje = esPrimo(numero);
  console.log(mensaje);


  //Convertir temperatura entre Celsius y Fahrenheit:
  function convertirTemperatura(temperatura, unidad) {
    var resultado;
  
    if (unidad === "C") {
      resultado = temperatura * 9 / 5 + 32;
      return temperatura + " grados Celsius equivalen a " + resultado + " grados Fahrenheit";
    } else if (unidad === "F") {
      resultado = (temperatura - 32) * 5 / 9;
      return temperatura + " grados Fahrenheit equivalen a " + resultado + " grados Celsius";
    } else {
      return "Unidad de temperatura inválida";
    }
  }
  
  var temperatura = prompt("Ingrese la temperatura: ");
  var unidad = prompt("Ingrese la unidad de temperatura (C o F): ");
  var mensaje = convertirTemperatura(temperatura, unidad);
  console.log(mensaje);


  //Calcular el total de una compra:
  function calcularTotalCompra() {
    var precios = [];
    var precio;
  
    do {
      precio = parseFloat(prompt("Ingrese el precio del producto (ingrese 'total' para obtener el total de la compra): "));
      if (!isNaN(precio)) {
        precios.push(precio);
      }
    } while (!isNaN(precio));
  
    var total = 0;
    for (var i = 0; i < precios.length; i++) {
      total += precios[i];
    }
  
    return "El total de la compra es: $" + total.toFixed(2);
  }
  
  var mensaje = calcularTotalCompra();
  console.log(mensaje);

  