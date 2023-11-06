function resumir() {
    if(1) {
        let precio = 200;
        let desc = 85;
        let cien = 100;

        let resultado = precio * desc / cien;
        let total = precio - resultado; 
        console.log(total);
        var mostrar = document.getElementById(total);

    } else if(2) {
        let precio1 = 200;
        let desc1 = 50;
        let cien = 100;

        let resultado = precio1 * desc1 / cien;
        let total2 = precio1 - resultado; 
        console.log(total2);

    }
    else {
        let precio2 = 200;
        let desc2 = 15;
        let cien = 100;

        let resultado = precio2 * desc2 / cien;
        let total3 = precio2 - resultado; 
        console.log(total3);

    }
}

function limpiar() {
    document.getElementById("btnLimpiar").form.reset();
}