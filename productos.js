const fs = require('fs');
const path = require('path')
//console.log(productosParseado);

const moduloProductos = {
    leerJSON : function(){
        const productosJSON = fs.readFileSync(path.join(__dirname,'..','productos.json'),'utf-8');
        const productosParseado = JSON.parse(productosJSON);

        return productosParseado
    },
    detalle : function (id) {
        const productos = this.leerJSON();
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === id){
                return productos[i]
            }
            return "No hay productos con el ID: " + id
        }
    }
}

module.exports = moduloProductos;