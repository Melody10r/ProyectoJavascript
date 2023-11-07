function resumir() {
    
    //obtiene el valor de la  caja de Texto CANTIDAD//
    
let cantidad=document.getElementById('cant').value;
//obtiene el tipo de descuento de la lista DESCUENTOS//
let desc=document.getElementById('desc').value;

//typeof es un operador JavaScript que al ser llamado sobre una variable, devuelve el tipo de dato que dicha variable contiene.//
console.log(typeof desc);

if (desc==="1"){
let  descEstudiante=40;
let total=parseInt(cantidad*descEstudiante);
console.log(total);
document.getElementById('total').innerHTML=total;



}else if(desc==="2")
{
    let  descTrainee=100;
    let total=parseInt(cantidad*descTrainee);
    console.log(total);
    document.getElementById('total').innerHTML=total;
}else{
    let  descJunior=170;
    let total=parseInt(cantidad*descJunior);
    console.log(total);
    document.getElementById('total').innerHTML=total;

}

function limpiar(){
document.getElementById("MyForm").reset() ;
document.getElementById('total').innerHTML="0.00";



}
}