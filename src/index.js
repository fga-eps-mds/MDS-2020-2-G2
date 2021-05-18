import {criarPullRequest} from './modules/services.js';
import {CodigoDevicePost} from './modules/apiServices.js';
import {ConfirmaLoginContaUsuario} from './modules/apiServices.js';
  
    //URL DAS PÁGINAS
    var currentUrl = String(window.location.href);
    var urlParts = currentUrl.split("/");
    //ABRIR MODAL CASO O BOTÃO CLOSE DA MILESTONE JÁ TENHA SIDO CLICADO
    if(localStorage.getItem('abrirModal')){
      criarPullRequest();
      localStorage.removeItem('abrirModal');
    }
    document.addEventListener("click", function (e) {
     
      urlParts[3], urlParts[4]
    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {         
     
    //BOTOES    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
          localStorage.setItem('abrirModal', 'true')
          var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
          window.alert(getFormAction);
          localStorage.setItem('getFormAction', getFormAction);
          //      SALVANDO INFORMAÇÕES NO LOCAL STORAGE
          var valuesAPI = String(getFormAction).split("/");
          // OWNER
          const $owner = urlParts[3];
          localStorage.setItem('owner', $owner);
          // REPOSITORIO
          const $repo = urlParts[4]
          localStorage.setItem('repo', $repo);
          // NUMERO DA MILESTONE
          const $NumberMilestone = getNumberMilestone(valuesAPI);
          var milestoneName = document.querySelector(".milestone-title-link").innerText;
          localStorage.setItem('milestoneName', milestoneName);
          localStorage.setItem('NumberMilestone', $NumberMilestone);

          // NOME DA MILESTONE
          localStorage.setItem('milestoneName', milestoneName); 
          var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
          //INSTRUÇÃO PARA AUTORIZAR A ABERTURA DO MODAL
        
          // var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
          location.reload();
     }
    }
  });

 
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){

    CodigoDevicePost();
    
   
  }

  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){
   
    ConfirmaLoginContaUsuario();

  }
  

/*FUNÇOES A DEFINIREM OS VALORES A SEREM PASSADOS PARA API*/

/*GET DONO DO REPOSITORIO*/
function getOwner(valuesAPI){
  var owner = valuesAPI[3];
  console.log(owner)
  return owner;
}

/*GET  REPOSITORIO*/
function getRepositori(valuesAPI){
  var repo = valuesAPI[4]
  console.log(repo)
  return repo;
}

/*GET NUMERO DA MILESTONE A SER FECHADA*/
function getNumberMilestone(valuesAPI){
  var milestoneNumber = valuesAPI[6]
  console.log(milestoneNumber)
  return milestoneNumber;
}