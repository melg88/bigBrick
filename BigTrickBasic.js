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

let digitado = "2 222 222 33 66 8 88 777 33";

digitado = digitado.split(" ");
let palavra = "";

digitado.forEach(o => {
    let tecla = parseInt(o.substr(0,1))-1;
    let qtde = o.length;

    palavra += teclas[tecla][qtde-1]
});

console.log(palavra);