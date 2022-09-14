const process = require("process");
const productos = require("../productos/productos.json");
const acciones = require("../acciones/acciones")
const fs = require ("fs");//requiere el fileSync

/* const productos2 = JSON.parse(fs.readFileSync("../productos/productos.json", "utf-8"))
//pasa el codigo de productos a formato json, y readFileSync lo lee. utf-8 Para que entienda caracteres especiales
console.log(productos2); */

const accion = process.argv[2]; //accion que ejecutara la app
const marca = process.argv[3];
const categoria = process.argv[4];
const precio = +process.argv[5];
const peso = [+process.argv[6], process.argv[7]];// 10 kg, 10 en number y 10 en string.
const stock = process.argv[8];

switch (accion) {
    case "listar":
        acciones.listar();
        break;
    case "agregar":
        let productoNuevo = {
            id: productos[productos.length - 1].id +1,//agrega una id con un numero mas del ultimo objeto.
            marca,
            categoria,
            precio,
            peso,
            stock: stock === "true"? true : false,
        }
        acciones.agregar(productoNuevo);
        break;
    case "eliminar":
        acciones.eliminar()
        break;
    default:
        break;
}

console.log(34)

