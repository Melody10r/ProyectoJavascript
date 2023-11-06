function resumir() {
    let cantidadTickets = document.getElementById('cantTickets').value;

    let descuento = document.getElementByld('categoria').value;

    console. log(typeof descuento);

    if(descuento === '1') {
        let precioTicket = 40 ;
        let total = parseInt(cantidadTickets) * precioTicket;
        console.log(total);
        document.getElementByld('total').innerHTML = total;

    } else if(descuento === "2" ) {
        let precioTicket = 100 ;
        let total = parseInt(cantidadTickets) * precioTicket;
        console.log(total);
        document.getElementByld('total').innerHTML = total;
    } else {
        let precioTicket = 170 ;
        let total = parseInt(cantidadTickets) * precioTicket;
        console.log(total);
        document.getElementByld('total').innerHTML = total;
    }
}

function limpiar() {
    document.getElementById('myForm').reset();
    document.getElementById('total').innerHTML = 0.00;
}

 
