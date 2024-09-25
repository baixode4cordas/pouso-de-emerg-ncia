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


function cidade() {
    var partida = document.getElementById("segundo").value;
    return parseInt(partida); 
}


function compra() {
    var quantidade = document.getElementById("primeiro").value;
    var valorUnitario = 6424;
    
    var totalPassagem = quantidade * valorUnitario;
    
    var valorCidade = cidade();
    
    var valorTotal = totalPassagem + valorCidade;
    
    document.getElementById("terceiro").value = valorTotal
}

let ans = document.getElementById("primeiro");
ans.addEventListener('keyup', compra);
let partidaSelect = document.getElementById("segundo");
partidaSelect.addEventListener('change', compra);