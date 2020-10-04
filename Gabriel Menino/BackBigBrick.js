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