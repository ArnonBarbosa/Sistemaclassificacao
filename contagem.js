let numeroalunos = 10

for (let contador = 0; contador < numeroalunos; contador++){
    //resto % - retorna o resto de uma divisão inteira
    if(contador == 0) {
        console.log('O numero é Zero')
    }
    else if (contador % 2 == 0) {
        //interpolação
        console.log(`O numero ${contador} é PAR`)
    } else if(contador % 2 ==1) {
        //concatenação
        console.log('O numero ' + contador + ' é IMPAR')
    }
}    