var basefotos = ['../imagens/arte1000x400.png', '../imagens/arte1000x400(2).png', '../imagens/arte1000x400(3).png']


let foto = document.getElementById('foto-banner');
var btna = document.getElementById('avancar-foto'); //botão de avançar 
var btnv = document.getElementById('voltar-foto') //botão de voaltar
btna.addEventListener('click', avancar); 
btnv.addEventListener('click', voltar);
let c = 1;
let i = 0;

function avancar() { //nessa função vai avançar uma foto dos destaques (tem realação com a variável btna)
    if (c < basefotos.length){
      foto.src = basefotos[c++];
    } else if (c == basefotos.length){
        foto.src = basefotos[0];
        c = 1;
    }
}

function voltar(){ //essa vai voltar uma foto dos destaques (tem realação com a variável btnv)
    if (i <= 0){
        foto.src = basefotos[2];
        i = 2;
    } else if (i > 0) {
        foto.src = basefotos[i--];
    }
}

//FUNÇÃO DE PASSAR AS FOTOS NO BANNER
