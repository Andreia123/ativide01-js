//alert('Olá!');
function contaCaracteres() {
    var texto = document.getElementById("original");
    document.getElementById("qtdCaracteres").innerText = texto.value.length;
}        
function aplicaEfeito() {
    var texto = document.getElementById("original");
    var efeito = document.getElementById("efeito").value;
    switch (efeito) {
        case "uppercase":
            document.getElementById("modificado").value = texto.value.toUpperCase();
            break;
        case "lowercase":
            document.getElementById("modificado").value = texto.value.toLowerCase();
            break;
    }
}