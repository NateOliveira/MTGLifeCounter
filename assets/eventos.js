// Variáveis player 1 e player 2 valores +1 e -1
const btnIncrementar_1_1 = document.getElementById('btn_incrementar-1-1');
const btnDecrementar_1_1 = document.getElementById('btn_decrementar-1-1');
const btnIncrementar_2_1 = document.getElementById('btn_incrementar-2-1');
const btnDecrementar_2_1 = document.getElementById('btn_decrementar-2-1');

// Variáveis player 1 e player 2 valores +5 e -5
const btnIncrementar_1_5 = document.getElementById('btn_incrementar-1-5');
const btnDecrementar_1_5 = document.getElementById('btn_decrementar-1-5');
const btnIncrementar_2_5 = document.getElementById('btn_incrementar-2-5');
const btnDecrementar_2_5 = document.getElementById('btn_decrementar-2-5');

// Variáveis player 1 e player 2 valores +10 e -10
const btnIncrementar_1_10 = document.getElementById('btn_incrementar-1-10');
const btnDecrementar_1_10 = document.getElementById('btn_decrementar-1-10');
const btnIncrementar_2_10 = document.getElementById('btn_incrementar-2-10');
const btnDecrementar_2_10 = document.getElementById('btn_decrementar-2-10');


var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var history_1 = document.getElementById("history-1");
var history_2 = document.getElementById("history-2");

window.addEventListener("load", function() {
    p1.innerHTML = "20";
    p2.innerHTML = "20";
})

let contador1 = 20;
let contador2 = 20;

// Contadores de valor 1
btnIncrementar_1_1.addEventListener('click', function() {
    contador1++;
    p1.innerHTML = contador1;
    history_1.innerHTML += "+1 congrats";
    history_2.innerHTML += "-1 fuck";
});
btnDecrementar_1_1.addEventListener('click', function() {
    contador1--;
    p1.innerHTML = contador1;
})
btnIncrementar_2_1.addEventListener('click', function() {
    contador2++;
    p2.innerHTML = contador2;
});
btnDecrementar_2_1.addEventListener('click', function() {
    contador2--;
    p2.innerHTML = contador2;
})

// Contadores de valor 5
btnIncrementar_1_5.addEventListener('click', function() {
    contador1 += 5;
    p1.innerHTML = contador1;
});
btnDecrementar_1_5.addEventListener('click', function() {
    contador1 -= 5;
    p1.innerHTML = contador1;
})
btnIncrementar_2_5.addEventListener('click', function() {
    contador2 += 5;
    p2.innerHTML = contador2;
});
btnDecrementar_2_5.addEventListener('click', function() {
    contador2 -= 5;
    p2.innerHTML = contador2;
})

// Contadores de valor 10
btnIncrementar_1_10.addEventListener('click', function() {
    contador1 += 10;
    p1.innerHTML = contador1;
});
btnDecrementar_1_10.addEventListener('click', function() {
    contador1 -= 10;
    p1.innerHTML = contador1;
})
btnIncrementar_2_10.addEventListener('click', function() {
    contador2 += 10;
    p2.innerHTML = contador2;
});
btnDecrementar_2_10.addEventListener('click', function() {
    contador2 -= 10;
    p2.innerHTML = contador2;
})

// Inicio de jogo
btn_main.addEventListener('click', function(e) {
    history_1.innerHTML += "Inicio de jogo...";
    history_2.innerHTML += "Inicio de jogo...";
    this.target.value = "End round";
});