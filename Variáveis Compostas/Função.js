function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

var res = parimpar(4)
console.log(res)

//Outro exemplo
function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(7, 3))

//Outro exemplo
var v = function(x) {
    return x*2
}
console.log(v(6))

//Outro exemplo, fatorial
function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
    console.log(fatorial(5)) //5! = 5.4.3.2.1 = 120

    //Outro exemplo
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
    console.log(fatorial(5)) //Dando erro n sei pq...
}