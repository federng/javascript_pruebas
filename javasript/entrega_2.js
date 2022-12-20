
// DECLARACION DE ARRAY CON SUS OBJETOS DENTROS 

const cervezas = [{
    id: 1,
    name:"Quilmes",
    precio: 345,
    alcohol: 5.1,
},
{
    id: 2,
    name:"Brahma",
    precio: 258,
    alcohol: 4.5,
},
{
    id: 3,
    name:"Andes Patágonica",
    precio: 375,
    alcohol: 5.5
},
{
    id: 4,
    name:"Corona",
    precio: 325,
    alcohol: 3.9
},
{
    id: 5,
    name:"Heineken",
    precio: 620,
    alcohol: 4.2
},
{
    id: 6,
    name:"Schneider",
    precio: 555,
    alcohol: 8.1
},
{
    id: 7,
    name:"Salta",
    precio: 289,
    alcohol: 6.3
},
];


// FUNCION AGREGADA PARA PODER PUSHEAR Y AGREGAR MÁS PRODUCTOS AL ARRAY 

function Cervezas(nombre, precio, alcohol) {
    this.id = cervezas.length + 1;
    this.name = name;
    this.precio = parseFloat(precio);
    this.alcohol = alcohol;
  }

cervezas.push(new Cervezas("Palermo", 520, 3.9));


// INDICAR EN QUE POSICIÓN SE ENCUENTRA CADA OBJETO

cervezas.forEach ((items, posición) => {
    
    console.log(items);
    console.log("Posición " + posición);
})


// ORDENAR POR PRECIO

console.log (cervezas.sort((a,b) => a.precio - b.precio));

// ORDENAR POR GRADUACION DE ALCOHOL

console.log(cervezas.sort((a,b) => a.alcohol - b.alcohol));


// VERIFICACIONES

let verificar = (elemento) => elemento.precio >190;
let verificar1 = (elemento) => elemento.precio >590;

console.log(cervezas.every(verificar));
console.log(cervezas.every(verificar1));

// FUNCION PARA AUMENTAR EL PRECIO UN 50%

const birraAumento = cervezas.map(aumento => {
    return{
        id: aumento.id,
        name: aumento.name,
        precio: aumento.precio * 1.5,
        alcohol: aumento.alcohol,
    }
})

console.log(birraAumento);

// FUNCION PARA FILTRAR POR PRECIO 

const cervezaPrecioMayor = cervezas.filter(el => el.precio < 300);

console.log(cervezaPrecioMayor);

const cervezaPrecioMenor = cervezas.filter(el => el.precio > 400);

console.log(cervezaPrecioMenor);

while(){
    let edad = parseIntprompt("Edad")
}



