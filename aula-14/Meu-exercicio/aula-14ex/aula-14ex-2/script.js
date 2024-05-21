function tabuada() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('seltab')

    

    if ( num.value.length == '') {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        for (var c = 1 ; c <= 10 ; c++ ) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            res.appendChild(item)
        }
        
    }
}