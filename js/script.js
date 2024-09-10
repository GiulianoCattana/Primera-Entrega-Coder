// Lista de productos en stock
const inventario = [
    { codigo: 1, nombre: "Tablet", valor: 1200 },
    { codigo: 2, nombre: "Reloj Inteligente", valor: 300 },
    { codigo: 3, nombre: "Teclado Mecánico", valor: 200 }
];

// Función para crear un mensaje de bienvenida
function bienvenida(nombre) {
    return "Hola " + nombre + ", gracias por visitarnos.";
}

// Función que muestra los productos disponibles
function mostrarInventario() {
    let texto = "Artículos en stock:\n";
    for (let item of inventario) {
        texto += `${item.codigo}. ${item.nombre} - $${item.valor}\n`;
    }
    return texto;
}

// Función para seleccionar un artículo del inventario
function elegirArticulo() {
    while (true) {
        let catalogo = mostrarInventario();
        let opcion = parseInt(prompt(catalogo + "Elige el número del artículo (0 para salir):"));
        
        if (opcion === 0) {
            alert("Has cancelado la compra.");
            return null;
        }
        
        let articuloSeleccionado = inventario.find(item => item.codigo === opcion);
        
        if (articuloSeleccionado) {
            return articuloSeleccionado;
        } else {
            alert("Opción inválida, selecciona un artículo existente.");
        }
    }
}

// Función para gestionar la interacción inicial con el usuario
function iniciarCompra() {
    let nombreUsuario = prompt("¿Cuál es tu nombre?");
    if (nombreUsuario) {
        alert(bienvenida(nombreUsuario));
        procesarCompra();
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

// Función que gestiona el proceso de compra
function procesarCompra() {
    let total = 0;
    let seguirComprando = true;
    
    while (seguirComprando) {
        let articulo = elegirArticulo();
        
        if (articulo) {
            total += articulo.valor;
            seguirComprando = confirm("¿Deseas añadir otro artículo?");
        } else {
            seguirComprando = false;
        }
    }
    if (total > 0) {
        alert("Compra finalizada. El total es: $" + total);
    } else {
        alert("No se ha realizado ninguna compra.");
    }
}

iniciarCompra();
