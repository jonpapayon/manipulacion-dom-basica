// variables y operaciones

//️ 1 Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es una variable y para qué sirve? 
// es un espacio en memoria
// ¿Cuál es la diferencia entre declarar e inicializar una variable? 
// es cuando se crea la variable y cuando se le asigna el valor
// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// la suma de los numeros cambian el valor de una variable y los strings solo son una cadena de texto
// ¿Cuál operador me permite sumar o concatenar?
// +

// 2 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// Nombre - string
// Apellido -string
// Nombre de usuario en Platzi - string
// Edad - numero
// Correo electrónico - string
// Mayor de edad - boleano
// Dinero ahorrado - numero
// Deudas - numero

// 3 Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = 'Jonatan'
let apellido = 'Constantino'
let usuarioPlatzi = 'jonpapayon'
let edad = 30
let correo = 'whyjonpapyon@gmail.com'
let mayorDeEdad = true
let dineroAhorrado = 1000
let deudas = 30000

// 4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
let nombreCompleto = nombre + apellido
let dineroReal = dineroAhorrado - deudas

// funciones

// 1 Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es una función?
// un conjunto de instrucciones que realiza una tarea o calcula un valor
// ¿Cuándo me sirve usar una función en mi código?
// para no repetir codigo
// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
// los parametros son las variables que recibe una funcionn cuando la estamos creando,
// los argumentos son las variables que recibe cuando se ejecuta

// 2 Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const usuario = (name, lastname, nickname) => {
const completeName = name + ' ' + lastname

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
usuario('jonatan','constantino','jonpapayon')

// condicionales 

// 1 Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un condicional?
// un requerimento para una decision
// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// if : podemos usar cualquier tipo de validaciones , 
// switch : agregamos una condicion y vemos sus casos
// ¿Puedo combinar funciones y condicionales?
// si

// 2 Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === 'Free') {
    console.log("Solo puedes tomar los cursos gratis")
} else if (tipoDeSuscripcion === 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
} else if (tipoDeSuscripcion === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
} else if (tipoDeSuscripcion === 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
} else {
    console.log('no existe esa suscripcion')
}

// 3 Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
function unTipoDeSuscipcion (suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis")
        return
    }
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
        return
    }
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
        return
    }
    if (suscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
        return
    }
    console.warn('no existe esa suscripcion')
}
// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 
const tiposSuscripciones = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function conseguirSuscripcion (suscripcion) {
    if (tiposSuscripciones[suscripcion]) {
        console.log(tipoDeSuscripcion[suscripcion])
        return
    }
    console.warn('no existe')
}

conseguirSuscripcion('Free')

// ciclos

// 1 Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un ciclo?
// codigo que se repite hasta encontrar un valor
// ¿Qué tipos de ciclos existen en JavaScript?
// for , while, do while
// ¿Qué es un ciclo infinito y por qué es un problema?
// porque nunca se detiene  y causa errores 
// ¿Puedo mezclar ciclos y condicionales?
// si 

// 2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
i = 0
while (i<3) {
    i ++
    if (i===3) {
        console.log("El valor de i es: " + i)
    }
}

// 3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let respuesta
while (respuesta != '4') {
    let pregunta = prompt('¿cuanto es 2 + 2?')
    respuesta = pregunta
}

// listas 

// 1 Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un array?
// una lista de variables 
// ¿Qué es un objeto?
// una variable con varias propedades
// ¿Cuándo es mejor usar objetos o arrays?
// depende de lo que quieras hacer
// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// si

// 2 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const recibirArray = (arr) => {
    console.log(arr[0])
}
// 3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
const imprimirArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const imprimirObject = (obj) => {
    const arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
