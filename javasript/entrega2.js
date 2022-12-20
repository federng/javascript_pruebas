
// let valor1 = parseInt(prompt("ingresá un numero") );
// let valor2 = parseInt(prompt("ingresa otro numero") );

// alert("Bienvenid@ a heladeria H")

// let valor1 = prompt("ingresa tu nombre ")
// let valor2 = prompt("ingresa tu apellido ")


// function suma ( numero1, numero2){
     
//    numero1 = valor1
//    numero2 = valor2

//    if(numero1 <= numero2){
//     return numero1
//    }
    
//     return numero1 + numero2;

// }

// document.write(suma())

// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";
// // Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

// console.log(persona1)
// document.write(nombre, "", edad, calle)

// function Producto(nombre, color, talle, stock) {
//     this.nombre = nombre;
//     this.color 	 = color;
//     this.talle = talle;
//     this.stock  = stock;
// }
// let producto1 = new Producto("Zapatilla Adidas", "Negra", 43, 3);
// let producto2 = new Producto("Licuadora Portatil", "Celeste", "", 21);
// let producto3 = new Producto("Televisor Samsung", "Blanco", "", 3);
// let producto4 = new Producto("Lente de sol", "Dorado/verde", "Small", 2);

// console.log(producto1, producto2, producto3, producto4);

// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
//     this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// // persona1.hablar();
// // persona2.hablar();
// // console.log(persona1.hablar(), persona1, persona2);

// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }


// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");

// console.log(persona1);

// class Producto {
//     constructor(nombre, precio, stock){
//         this.precio = precio
//         this.nombre = nombre
//         this.stock = stock
//     }
// }

// let producto1 = new Producto("linterna", "$20.000", 5)

// document.write(producto1.nombre, producto1.precio, producto1.stock)


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();

class Libro{
    constructor(titulo, autor, age, genero ){
        
        this.titulo = titulo; 
        this.autor = autor;
        this.age = age;
        this.genero = genero;
    }

    infolibro(){
        return ` ${this.titulo} es un libro de ${this.autor} que pertenece al género ${this.genero} y fue escrito en el año ${this.age}  `;
    }
};

let libros = []

while(libros.length < 3){
    let titulo= prompt("Ingresá el titulo de un libro");
    let autor = prompt ("ingresa nombre del autor");
    let age = prompt("ingresá el año de lanzamiento");
    let genero= prompt("Ingresá el género del libro");
    // .toLowerCase()

    if (titulo != '' &&
        autor != '' &&
        !isNaN(age) &&
        age.length == 4 &&
        (genero == 'aventura' || genero == 'terror' || genero == 'fantasía' ));
         {
            libros.push(new Libro(titulo, autor, age, genero))
        };
}

const monstrarLibros = () => {
    console.log(libros);
}

const mostrarAutores = () => {
    
}

monstrarLibros()