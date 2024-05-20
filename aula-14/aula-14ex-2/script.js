function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.lenght == 0 || fim.value.lenght == 0|| passo.value.lenght == 0 ) {
        res.innerHTML = 'Impossivel contar'
    } else if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        for (var c = ini ; c <= f ; c++) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        res.innerHTML = 'Contando: '
        if ( ini < f) {
            for (var c = ini ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for (var c = ini ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }

    res.innerHTML += `\u{1F3C1}`
}