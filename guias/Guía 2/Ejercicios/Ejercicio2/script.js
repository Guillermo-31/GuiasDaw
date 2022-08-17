let productosName = [], productosPrecio = [], tabla = document.getElementById('tabla'), i = 0, salir = salirPrecio = continuar = false, respuesta;

function ingresarProductos(){
  do {
    salir = true; continuar = true; salirPrecio = true;
    productosName[i] = prompt("Ingrese el nombre del producto: ", "");
    do {
      productosPrecio[i] = Number(prompt("Ingrese el nombre del producto: ", "")).toFixed(2);
      if (productosPrecio < 0)
        alert("Ha ingresado un precio incorrecto. Vuelve a ingresar otro precio.");
      else
        salirPrecio = true;
    } while (!salirPrecio);
    tabla.innerHTML += "<tr><td>"+productosName[i]+"</td><td>$"+productosPrecio[i]+"</td></tr>"
    do {
      respuesta = prompt("¿Desea ingresar otra venta? (Sí/No)", "");
      if (respuesta == "Sí" || respuesta == "sí" || respuesta == "Si" || respuesta == "si" || respuesta == "SI" || respuesta == "SÍ" || respuesta == "sI" || respuesta == "sÍ" || respuesta == "S" || respuesta == "s") {
        continuar = true;
        salir = false;
        console.log('Continuar: ' + continuar);
        console.log('Salir: ' + salir);
      }else if (respuesta == "No" || respuesta == "nO" || respuesta == "NO" || respuesta == "no" || respuesta == "n" || respuesta == "N"){
        continuar == true;
        salir == true;
        console.log('Continuar: ' + continuar);
        console.log('Salir: ' + salir);
      }
    } while (!continuar);
  } while (!salir);
}

window.onload = ingresarProductos;