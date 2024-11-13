let principal = document.getElementById("ImagemPrincipal");
let outras = document.getElementsByClassName("imagem");
outras[0].onclick = ()=> {
    ImagemPrincipal.src = outras[0].src;
}
outras[1].onclick = ()=> {
    ImagemPrincipal.src = outras[1].src;
}
outras[2].onclick = ()=> {
    ImagemPrincipal.src = outras[2].src;
}


// valor rolezinho



function calcularTotal() {
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;
    const total = quantidade * preco;

    document.getElementById('valor').value = total || 0; 
}

document.addEventListener("DOMContentLoaded", function() {

//    data só no futuro
   
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1; 
    var ano = hoje.getFullYear();


    if(dia < 10) dia = '0' + dia;
    if(mes < 10) mes = '0' + mes;


    var dataAtual = ano + '-' + mes + '-' + dia;


    document.getElementById("data").setAttribute("min", dataAtual);
});
