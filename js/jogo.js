const rolarDado1 = () => {
    let dado1 = Math.floor(Math.random() * 6 + 1)
    switch (dado1) {
        case 1:
            document.getElementById("face1").src = "./img/face1.png"
            break;
        case 2:
            document.getElementById("face1").src = "./img/face2.png"
            break;
        case 3:
            document.getElementById("face1").src = "./img/face3.png"
            break;
        case 4:
            document.getElementById("face1").src = "./img/face4.png"
            break;
        case 5:
            document.getElementById("face1").src = "./img/face5.png"
            break;
        case 6:
            document.getElementById("face1").src = "./img/face6.png"
            break;
        default:
            // caso contrário
            break;
    }
    return dado1
}

const rolarDado2 = () => {
    let dado2 = Math.floor(Math.random() * 6 + 1)
    switch (dado2) {
        case 1:
            document.getElementById("face2").src = "./img/face1.png"
            break;
        case 2:
            document.getElementById("face2").src = "./img/face2.png"
            break;
        case 3:
            document.getElementById("face2").src = "./img/face3.png"
            break;
        case 4:
            document.getElementById("face2").src = "./img/face4.png"
            break;
        case 5:
            document.getElementById("face2").src = "./img/face5.png"
            break;
        case 6:
            document.getElementById("face2").src = "./img/face6.png"
            break;
        default:
            // caso contrário
            break;
    }
    return dado2
}
const bnt = document.getElementById('botao')
const ponto = document.getElementById('pnt')
const clicou = document.getElementById('pontoClick')
const tentativa = document.getElementById('vida')
let mais1 = 0
let cont = 0
let vida = 3
tentativa.innerHTML = `${vida}`

bnt.addEventListener('click', function () {
    cont++
    clicou.innerHTML = `${cont}`
    rolarDado1()
    rolarDado2()


    if (rolarDado1() === rolarDado2()) {
        mais1++
        cont = 0
        ponto.innerHTML = `${mais1}`
        clicou.innerHTML = `${cont}`
    }
    if (cont === 6) {
        cont = 0
        mais1--
        if (mais1 < 0) {
            mais1 = 0
        }
        ponto.innerHTML = `${mais1}`
        clicou.innerHTML = `${cont}`
    }

    if (cont === 0 && mais1 === 0) {
        vida--
        tentativa.innerHTML = `${vida}`
    }

})