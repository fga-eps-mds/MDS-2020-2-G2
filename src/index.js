//URL DAS PÁGINAS
var currentUrl = String(window.location.href);
var urlParts = currentUrl.split("/");

document.addEventListener("click", function (e) {


    //VALIDA ENTRADA EM GITHUB MILESTONES
    if (urlParts[5] == "milestones" && urlParts[2] == "github.com") {
  
    //BOTOES    
    var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");
    var getFormAction = document.querySelectorAll('form[class="d-inline-block mr-2"]')[0].action;
  
  
    //VALIDA FECHAMENTO DE MILESTONE
    if (e.path[0] == closeMilestoneButton &&
        closeMilestoneButton.textContent.toLowerCase() == "close") {
        var base = document.querySelectorAll("form.d-inline-block.mr-2").action;
        
        var milestoneName = document.querySelector(".milestone-title-link").innerText;
        
      // PEGAR VALORES DE BRANCHS
    const currentBrnach =  window.prompt("Qual branch para merge ?");
    const recieveBranch = window.prompt("Qual branch destino ?");    
    
      var data = JSON.stringify({
            "title": "Fechamento do Evento Click Milestone e Pull Request Automatico",
            "body": "Este merge foi feito com o próprio código",
            "head": currentBrnach,
            "base": recieveBranch
          });
          
      //VALORES A SEREM PASSADOS PARA API
      var valuesAPI = String(getFormAction).split("/");
      const $owner = getOwner(valuesAPI);
      const $repo = getRepositori(valuesAPI);
      const $NumberMilestone = getNumberMilestone(valuesAPI);
      var token = localStorage.getItem('token');
      
    
      }
    }
  });
  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device"  && urlParts[5] != "success" &&  urlParts[5] != "confirmation"){
    
    
  }

  if(urlParts[2] == "github.com" && urlParts[3] == "login" && urlParts[4] == "device" && urlParts[5] == "success" ){

    var keyValue = localStorage.getItem('key_dev');
    
  
  
  function loginDevice(codeUser){
   
    document.getElementById("user-code-0").value = codeUser[0];
    document.getElementById("user-code-1").value = codeUser[1];
    document.getElementById("user-code-2").value =  codeUser[2];
    document.getElementById("user-code-3").value = codeUser[3];
    document.getElementById("user-code-5").value = codeUser[5];
    document.getElementById("user-code-6").value = codeUser[6];
    document.getElementById("user-code-7").value = codeUser[7];
    document.getElementById("user-code-8").value = codeUser[8];
    
    
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
  