let heroi = [['Lucas', 581],
['Vagner', 1274],
['Kayla', 2643],
['Zeca', 6003],
['Gabriel', 7491],
['Thiago', 8500],
['Felipe', 9891],
['Ana', 11000]
];

let nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']

for (let i = 0; i < heroi.length; i++) {
    if (heroi[i][1] < 1000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[0]} `)
    }
    if (heroi[i][1] > 1001 && heroi[i][1] <= 2000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[1]} `)
    }

    if (heroi[i][1] > 2001 && heroi[i][1] <= 5000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[2]} `)
    }

    if (heroi[i][1] > 5001 && heroi[i][1] <= 7000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[3]} `)
    }

    if (heroi[i][1] > 7001 && heroi[i][1] <= 8000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[4]} `)
    }
    if (heroi[i][1] > 8001 && heroi[i][1] <= 9000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[5]} `)
    }
    if (heroi[i][1] > 9001 && heroi[i][1] <= 10000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[6]} `)
    }
    if (heroi[i][1] > 10000) {
        console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel[7]} `)
    }
}