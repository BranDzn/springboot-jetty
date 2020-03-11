window.addEventListener("load", () =>{
    //aki serâo declaradas nossas funçôes
    iniciarbotao1();
    iniciarbotao2();
    iniciarbotao3();
    iniciarbotao4();
    iniciarbotao5();
    iniciarbotao6();
    iniciarbotao7();
    iniciarbotao8();
    iniciarbotao9();
    limpar();
    iniciarbotaodivisao();
    iniciarbotaomultiplicacao();
    iniciarbotaosubtracao();
    iniciarbotaoadicao();
    iniciarbotaoigual();
    iniciarbotaoponto();
    iniciarbotaopotencia();
    iniciarbotaoarredondar();
    iniciarbotaoraizquadrada();
})

function limpar(){
    document.querySelector(".limpar").addEventListener("click", () => {
        limpar = document.querySelector(".limpar").value;
        document.querySelector(".visor").value = '';
    })
}

function iniciarbotao1(valor){
    document.querySelector(".button1").addEventListener("click", () => {
    numero1 = document.querySelector(".button1").value;
    document.querySelector(".visor").value += numero1;
    })

}

function iniciarbotao2(valor){
    document.querySelector(".button2").addEventListener("click", () => {
    numero2 = document.querySelector(".button2").value;
    document.querySelector(".visor").value += numero2;
    })

}

function iniciarbotao3(valor){
    document.querySelector(".button3").addEventListener("click", () => {
    numero3 = document.querySelector(".button3").value;
    document.querySelector(".visor").value += numero3;
    })

}

function iniciarbotao4(valor){
    document.querySelector(".button4").addEventListener("click", () => {
    numero4 = document.querySelector(".button4").value;
    document.querySelector(".visor").value += numero4;
    })

}

function iniciarbotao5(valor){
    document.querySelector(".button5").addEventListener("click", () => {
    numero5 = document.querySelector(".button5").value;
    document.querySelector(".visor").value += numero5;
    })

}

function iniciarbotao6(valor){
    document.querySelector(".button6").addEventListener("click", () => {
    numero6 = document.querySelector(".button6").value;
    document.querySelector(".visor").value += numero6;
    })

}

function iniciarbotao7(valor){
    document.querySelector(".button7").addEventListener("click", () => {
    numero7 = document.querySelector(".button7").value;
    document.querySelector(".visor").value += numero7;
    })

}

function iniciarbotao8(valor){
    document.querySelector(".button8").addEventListener("click", () => {
    numero8 = document.querySelector(".button8").value;
    document.querySelector(".visor").value += numero8;
    })

}

function iniciarbotao9(valor){
    document.querySelector(".button9").addEventListener("click", () => {
    numero9 = document.querySelector(".button9").value;
    document.querySelector(".visor").value += numero9;
    })

}


function iniciarbotaodivisao(){
    document.querySelector(".divisao").addEventListener("click", () => {
        divisao = document.querySelector(".divisao").value;//pegar o valor (value) dessa class "divisâo", no HTML, o "value" da divisâo é (/)
        document.querySelector(".visor").value += divisao;
        
    })
}


function iniciarbotaomultiplicacao(){
    document.querySelector(".multiplicacao").addEventListener("click", () => {
        multiplicacao = document.querySelector(".multiplicacao").value;
        document.querySelector(".visor").value += multiplicacao;
    })
}


function iniciarbotaosubtracao(){
    document.querySelector(".subtracao").addEventListener("click", () => {
        subtracao = document.querySelector(".subtracao").value;
        document.querySelector(".visor").value += subtracao;
    })
}


function iniciarbotaoadicao(){
    document.querySelector(".adicao").addEventListener("click", () => {
        adicao = document.querySelector(".adicao").value;
        document.querySelector(".visor").value += adicao;
    })

}


function iniciarbotaoigual(){
    document.querySelector(".igual").addEventListener("click", () => {
    var resultado = 0;
    resultado = document.querySelector(".visor").value;
    document.querySelector(".visor").value = '';
    document.querySelector(".visor").value = eval(resultado); //eval é uma funçâo do JS, que vai calcular qualquer operaçâo
    })

}


function iniciarbotaoponto(){
    document.querySelector(".ponto").addEventListener("click", () => {
        let ponto = document.querySelector(".ponto").value;
        document.querySelector(".visor").value += ponto;
    })

}


function iniciarbotaopotencia(valor){
    document.querySelector(".potencia").addEventListener("click", () => {
        potencia = document.querySelector(".potencia").value;
        //document.querySelector(".visor").value += potencia;
        potencia = Math.pow(x,y)
        var x = prompt(document.querySelector(".potencia").value);
        var y = prompt(document.querySelector(".potencia").value);
        document.querySelector(".visor").value += Math.pow(x,y);
        

    })

}



function iniciarbotaoarredondar(){
    document.querySelector(".arredondar").addEventListener("click", () => {
        arredondar = document.querySelector(".arredondar").value;
        arredondar = Math.round(x);
        var x = prompt(document.querySelector(".arredondar").value);
        document.querySelector(".visor").value += Math.round(x);
    })

}


function iniciarbotaoraizquadrada(){
    document.querySelector(".raizq").addEventListener("click", () => {
        raizquadrada = document.querySelector(".raizq").value;
        raizquadrada = Math.sqrt(x);
        var x = prompt(document.querySelector(".raizq").value);
        document.querySelector(".visor").value += Math.sqrt(x); 
    })

}