const process = require('process');
const moduloProductos = require('./productos');

const comando = process.argv[2];

if(comando === "listar"){
    //console.log(moduloProductos.leerJSON())

    const productosArray = moduloProductos.leerJSON();

    for (let i = 0; i < productosArray.length; i++) {
        console.log(`${productosArray[i].nombre} - $${productosArray[i].precio}`);
        
    }
}else if(comando === "detalle"){
    console.log(moduloProductos.detalle(+ process.argv[3]));

}else if(typeof comando === "undefined"){
    console.log('Debes ingresar un comando!!!');
}else{
    console.log('Comando incorrecto se modifico archivo para ejercitacion');
}