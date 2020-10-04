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

//

const teclas = [
    [],                     // 1
    ['a', 'b', 'c'],        // 2
    ['d', 'e', 'f'],        // 3
    ['g', 'h', 'i'],        // 4
    ['j', 'k', 'l'],        // 5
    ['m', 'n', 'o'],        // 6
    ['p', 'q', 'r', 's'],   // 7
    ['t', 'u', 'v'],        // 8
    ['w', 'x', 'y', 'z']    // 9
];

// let str = "2 222 222 33 66 8 88 777 33 0 666 55";
let str = "accenture ok";
let palavras = str.split(" ");
let strNew = "";
let tipo = 2;

if(tipo == 1){
    palavras.forEach(palavra => {
        if(palavra == "0"){
            strNew += " ";
            return;
        }
    
        let tecla = parseInt(palavra.substr(0,1))-1;
        let qtde = palavra.length;
    
        strNew += teclas[tecla][qtde-1];
    });    
}else if(tipo == 2){
    palavras.forEach((palavra, index) => {
        let letras = palavra.split(''); 

        letras.forEach(letra => {

            teclas.forEach((tecla, index)=> {
                qtdeRepete = tecla.indexOf(letra)

                if(qtdeRepete != -1){
                    for(i = qtdeRepete;i>=0;i--){
                        strNew += (index+1).toString()
                    }
                    if(teclas.length-1 > index) strNew += " "
                    return;
                }

            })

        })

        if (palavras.length-1 > index) strNew += "0 "
    })
}

console.log(strNew);

//

//Teclado numérico
const keyboard = [
    [],['a','b','c'],['d','e','f'],
    ['g','h','i'],['j','k','l'],['m','n','o'],
    ['p','q','r','s'],['t','u','v'],['w','x','y','z']
]

var input = "2 222 222 33 66 8 88 777 33" //accenture

console.log(numberToWords(input))


//Converte input de números para letras
function numberToWords(input){
    input = input.split(" ")
    let output = ""

    input.forEach(letter => {
    
        if(letter == 0){
            output += " "
            return
        }
    
        let numero = parseInt(letter.substring(0, 1))-1
        let click = letter.length
    
        output += keyboard[numero][click-1]
    })
    return output
}