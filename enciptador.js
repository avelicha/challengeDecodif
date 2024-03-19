var campo_texto = document.getElementById("textoEncripta").value.toString();
var campo_mensaje = document.getElementById("textoDesencripta").value.toString();
const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
function btnEncripta(){
    var campoTexto = document.getElementById("textoEncripta").value.toString();
    campoTexto = campoTexto.toLowerCase();
    textoEncripta.value = campoTexto;
    var texto = encriptar(campoTexto);
    textoDesencripta.value = texto.toString();
  //textoDesencripta.innerHTML = campo_mensaje;
     // console.log(campo_mensaje);
 }
 function encriptar(fraseEncripta){
   
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncripta.includes(matriz_code[i][0])){
            fraseEncripta = fraseEncripta.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }

    }
    console.log(fraseEncripta);
    return fraseEncripta;
}
function btnDesencripta(){
    var campoTexto = document.getElementById("textoEncripta").value.toString();
    campoTexto = campoTexto.toLowerCase();
    textoDesencripta.value = campoTexto;
    console.log(campoTexto);
    var texto = desencriptar(campoTexto);
    textoDesencripta.value = texto.toString();
}
function desencriptar(frasedesencripta){
    for(let i = 0; i < matriz_code.length; i++){
        if(frasedesencripta.includes(matriz_code[i][0])){
            if(frasedesencripta.includes(matriz_code[i][1])){
                frasedesencripta = frasedesencripta.replaceAll(
                    matriz_code[i][1],
                    matriz_code[i][0]
                 );
            }
                  
        }
console.log(i);
            console.log(frasedesencripta);
    }
    
    return frasedesencripta;
}
function validar(){

}