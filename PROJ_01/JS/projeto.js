function myFunctionEncTrabalho(){
    document.getElementById("myDropdownEncTrabalho").classList.toggle("show");
}

function myFunctionEmpregadores(){
    document.getElementById("myDropdownEmpregadores").classList.toggle("show");
}
  
 
window.onclick = function(event) {
    if (!event.target.matches('.dropbtnEncTrabalho')) {
        var dropdownsEncTrabalho = document.getElementsByClassName("dropdown-content-EncTrabalho");
        var i;
        for (i = 0; i < dropdownsEncTrabalho.length; i++) {
          var openDropdown = dropdownsEncTrabalho[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
      if (!event.target.matches('.dropbtnEmpregadores')) {
        var dropdownsEmpregadores = document.getElementsByClassName("dropdown-content-Empregadores");
        var i;
        for (i = 0; i < dropdownsEmpregadores.length; i++) {
          var openDropdown = dropdownsEmpregadores[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }

  }

 

function Login(){
    window.location = "login.html";
}

function Registro(){
    window.location = "registar.html";
}

function Inicio(){
    window.location = "projeto.html";
}


var btn = document.querySelector(".bt_subir");
btn.addEventListener('click', function(){
  window.scrollTo(0,0);
});


// ############################# modificar nav ################################################
var menu = document.querySelector('.nav1');
var btInicio = document.querySelector('.dropbtnInicio');
var btEncontrarTrabalhos =document.querySelector(".dropbtnEncTrabalho");
var btEmpregadore = document.querySelector(".dropbtnEmpregadores");
var btEntrar = document.querySelector(".Entrar");
var brRegisto = document.querySelector(".Registro");
function ativarScrooll(){
  menu.classList.toggle("ativo", scrollY > 530);
  btInicio.classList.toggle("ativarInicio", scrollY > 530);
  btEncontrarTrabalhos.classList.toggle("ativarBtTrabalho", scrollY > 530);
  btEmpregadore.classList.toggle("ativarBtEmpregadores", scrollY > 530);
  btEntrar.classList.toggle("ativarBtEntrar", scrollY > 530);
  brRegisto.classList.toggle("ativarBtRegistro", scrollY > 530);
}
window.addEventListener('scroll',ativarScrooll);
// ################################################################################################



var h3Projeto1 = document.querySelector(".h3Projeto1");
var button_categoria1 = document.querySelector('.button_categoria1');
var bt1_funcao1 = document.querySelector(".bt1_funcao1");
var bt1_funcao2 = document.querySelector(".bt1_funcao2");
var bt1_funcao3 = document.querySelector(".bt1_funcao3");
var bt1_funcao4 = document.querySelector(".bt1_funcao4");
var bt1_funcao5 = document.querySelector(".bt1_funcao5");
var preco_hora1 = document.querySelector(".preco_hora1");
var pLances1 = document.querySelector(".pLances1");
var pLances_medio1 = document.querySelector(".pLances_medio1");
var pmeses1 = document.querySelector(".pmeses1");
fetch("dados/projeto1.json").then( (response) => {
  response.json().then((dados1) => {
    dados1.projeto1.map((p1) => {
      h3Projeto1.innerHTML = p1.nome;
      button_categoria1.innerHTML = p1.categoria;
      bt1_funcao1.innerHTML = p1.funcao1;
      bt1_funcao2.innerHTML = p1.funcao2;
      bt1_funcao3.innerHTML = p1.funcao3;
      bt1_funcao4.innerHTML = p1.funcao4;
      bt1_funcao5.innerHTML = p1.funcao5;
      preco_hora1.innerHTML = p1.precoHora;
      pLances1.innerHTML = p1.numLarces;
      pLances_medio1.innerHTML = p1.lanceMedio;
      pmeses1.innerHTML = p1.tempo;
    })
  });
});

var h3Projeto2 = document.querySelector(".h3Projeto2");
var button_categoria2 = document.querySelector('.button_categoria2');
var bt2_funcao1 = document.querySelector(".bt2_funcao1");
var bt2_funcao2 = document.querySelector(".bt2_funcao2");
var bt2_funcao3 = document.querySelector(".bt2_funcao3");
var bt2_funcao4 = document.querySelector(".bt2_funcao4");
var bt2_funcao5 = document.querySelector(".bt2_funcao5");
var preco_hora2 = document.querySelector(".preco_hora2");
var pLances2 = document.querySelector(".pLances2");
var pLances_medio2 = document.querySelector(".pLances_medio2");
var pmeses2 = document.querySelector(".pmeses2");
fetch("dados/projeto2.json").then( (response) => {
  response.json().then((dados2) => {
    dados2.projeto2.map((p2) => {
      h3Projeto2.innerHTML = p2.nome;
      button_categoria2.innerHTML = p2.categoria;
      bt2_funcao1.innerHTML = p2.funcao1;
      bt2_funcao2.innerHTML = p2.funcao2;
      bt2_funcao3.innerHTML = p2.funcao3;
      bt2_funcao4.innerHTML = p2.funcao4;
      bt2_funcao5.innerHTML = p2.funcao5;
      preco_hora2.innerHTML = p2.precoHora;
      pLances2.innerHTML = p2.numLarces;
      pLances_medio2.innerHTML = p2.lanceMedio;
      pmeses2.innerHTML = p2.tempo;
    })
  });
});


