let cantidad = document.getElementById("cantidad")
let boton = document.getElementById("generar");
let contraseña= document.getElementById("contrasena");

const cadenadecaracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

 
function generar(){
    
    let numeroDigitado = parseInt (cantidad.value); 
   console.log (numeroDigitado); 

    if (numeroDigitado < 8 ){
   alert("cantidad de caracteres tiene que ser  mayor que 8");
}
let password= "";
for(let i= 0; i <numeroDigitado; i++){

    let caracterAleatorio = cadenadecaracteres [Math.floor(Math.random() * cadenadecaracteres.length)]; 
    console.log(caracterAleatorio);

 password +=caracterAleatorio;


}
contraseña.value=password



}









