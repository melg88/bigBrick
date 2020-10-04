
function conversorNumeroEmMensagem(mensagem) {

    var mensagemPronta = []

    const teclas = [
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];

    mensagem = mensagem.split(" ");

    mensagem.forEach(o => {
        let posisaoTecla = o.substr(0,1);
        let tecla = parseInt(posisaoTecla - 1);
        let quantidadeLetras = o.length;

        mensagemPronta.push(teclas[tecla][quantidadeLetras-1]) 
    
});
return mensagemPronta.join('');
}

let mensagem = "2 222 222 33 66 8 88 777 33";

teste = conversorNumeroEmMensagem(mensagem);

console.log(teste)
