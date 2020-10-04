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

let codificado = "2 222 222 33 66 8 88 777 33 0 666 55";
let palavras = codificado.split(" ")
let decodificado = "";

palavras.forEach(letras => {
    if(letras == "0"){
        decodificado += " ";
        return;
    }

    let tecla = parseInt(letras.substr(0,1))-1;
    let qtde = letras.length;

    decodificado += teclas[tecla][qtde-1]
});    

console.log(decodificado);