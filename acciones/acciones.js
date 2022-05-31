const productos = require("../productos/productos.json")
const fs = require ("fs"); // llama a los metodos de fileSync

module.exports = {
    listar :function listar() {
        console.log(productos);//mostrar por consola todos los productos.
    },
    agregar : function agregar(producto) {// agregar un producto.
        
        productos.push(producto);
        console.log(`El producto ${producto.categoria} ${producto.marca} fue agregado con exito.`);
        this.listar()
        fs.writeFileSync("../productos/productos.json", JSON.stringify(productos))// fs.writeFileSync = escribir en un lugar con los parametros dados
    },
    actualizar : function actualizar() {
        productos
    },
    eliminar : function eliminar(){
        productos.pop();
        fs.writeFileSync("../productos/productos.json", JSON.stringify(productos, null, 3))
        console.log(productos);
    },
}
