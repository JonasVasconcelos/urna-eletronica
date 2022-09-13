let seuVotoPara = document.querySelector(".d-1-1 span");
let cargo = document.querySelector(".d-1-2 span");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let Numero = '';
let branco = false

function comecarEtapa(){
    let etapa = dados[etapaAtual];
    let numeroHtml = '';
    
    Numero = '';
    branco = false

    for(let i = 0; i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else{
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    aviso.style.display = "none";

    descricao.innerHTML = "";
    lateral.innerHTML = "";
    numeros.innerHTML = numeroHtml;
}

function atualizarInterface(){
    let etapa = dados[etapaAtual];
    let candidato = etapa.candidatos.filter((item) =>{
        if(item.numero === Numero){
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = "block";
        aviso.style.display = "block"
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`

        lateral.innerHTML = `<div class="img"><img src="imagens/${candidato.foto.url}" alt=""></div>`;
    }else{
        seuVotoPara.style.display = "block";
        aviso.style.display = "block"
        descricao.innerHTML = `<div class = "aviso--grande pisca">VOTO NULO<div/>`;
    }
}

function clicou(n){
    let etapa = dados[etapaAtual];
    let num = document.querySelector(".numero.pisca");
    if(num !== null){
        num.innerHTML = n;
        Numero = `${Numero}${n}`;

        num.classList.remove('pisca');
        if(num.nextElementSibling !== null){
            num.nextElementSibling.classList.add('pisca');
        }else{
            atualizarInterface()
        }
    }
}

function brancobt(){
    descricao.innerHTML = `<div class = "aviso--grande pisca">VOTO EM BRANCO<div/>`;
    branco = true;
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    numeros.innerHTML = '';
}

function corrige(){
    comecarEtapa()
}

function confirma(){
    let etapa = dados[etapaAtual];
    if(Numero.length===etapa.numeros | branco==true){
        document.querySelector('.tela').innerHTML = `<div class = "aviso--gigante pisca">FIM<div/>`;
    }
}

comecarEtapa()