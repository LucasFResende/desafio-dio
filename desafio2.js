let nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']

const calcNivel = function (vitorias) {
    if (vitorias <= 10) {
        return nivel[0]
    } else if (vitorias > 10 && vitorias <= 20) {
        return nivel[1]
    } else if (vitorias > 20 && vitorias <= 50) {
        return nivel[2]
    } else if (vitorias > 50 && vitorias <= 80) {
        return nivel[3]
    } else if (vitorias > 80 && vitorias <= 90) {
        return nivel[4]
    } else if (vitorias > 90 && vitorias <= 100) {
        return nivel[5]
    } else if (vitorias > 100) {
        return nivel[6]
    }
}

let vitorias = Math.floor(Math.random() * 120)
let derrotas = Math.floor(Math.random() * 50)

console.log('O Herói tem de saldo de ' + (vitorias - derrotas) + ' está no nível de ' + calcNivel(vitorias))