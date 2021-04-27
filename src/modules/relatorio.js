import {File} from '../libraries/filesaver.js';


   var total = 0;
   var contador = 0;
   let nomeContribuinte = [];
   let qtdComitsContribuinte = [];
  //VALORES A SEREM PASSADOS PARA API
  
  export function  criarRelatorio(numeroMilestone, token, $owner, $repo){
  
    var xhr = new XMLHttpRequest();
    
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
       var recebeContribuintes = JSON.parse(this.responseText);
      const $numerosContribuintes = recebeContribuintes.length;
      milestone(numeroMilestone, recebeContribuintes, $numerosContribuintes, token, $owner, $repo);
       
      
    }});
    
    xhr.open("GET", "https://api.github.com/repos/"+$owner+"/"+$repo+"/contributors");
    xhr.setRequestHeader("authorization", "Bearer " + token);
    xhr.send();
    
    }
    
    function milestone(numeroMilestone, recebeContribuintes, numerosContribuintes, token, owner, repo){ 
      var xhr = new XMLHttpRequest();
    
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          var b = String(this.responseText).split('url:')
          
         var resposta = JSON.parse(this.responseText);
        
         const resultadoProcura = milestoneDesejada(numeroMilestone,resposta, resposta.length)
         
         var nomeSprint = resultadoProcura.title
          var dataAberturaMilestone =  resultadoProcura.created_at
          var dataFechamentoMilestone = resultadoProcura.closed_at
        //   console.log( resultadoProcura.created_at)
         
         ProcuraContribuicao(recebeContribuintes,  numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone, token,  owner, repo, nomeSprint);
    
        }
      });
      xhr.open("GET", "https://api.github.com/repos/"+owner+"/"+repo+"/milestones?state=all&sort=completeness");
      xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
      xhr.setRequestHeader("authorization", "Bearer " + token);
      xhr.send();
    }
   
    function milestoneDesejada(numeroMilestone,resposta,  qtdMilestones){
      
      for(var i = 0; i < qtdMilestones; i++){
        if (resposta[i].number == numeroMilestone){
         
          return resposta[i];
        }
      
        
      }
    }
       
    function ProcuraContribuicao(recebeContribuintes, numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone, token, owner, repo, nomeSprint){
    
  
    var i = 0;
    while(i < numerosContribuintes){
      var contribuinte = recebeContribuintes[i].login;
  
    
      getContribuicao(contribuinte, numerosContribuintes,  dataAberturaMilestone, dataFechamentoMilestone, token, owner, repo, nomeSprint);
      i++;
    }
    }
    
    function getContribuicao(contribuinte, numerosContribuintes, dataAberturaMilestone, dataFechamentoMilestone, token, owner, repo, nomeSprint){
      
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText)
          var todosCommits = JSON.parse(this.responseText);
            
           calculaCommits(contribuinte, todosCommits.length, numerosContribuintes, nomeSprint);
        
        }
      });
     
      xhr.open("GET", "https://api.github.com/repos/"+owner+"/"+repo+"/commits?author="+contribuinte+"&since="+dataAberturaMilestone+"&until="+dataFechamentoMilestone);
      xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
      xhr.setRequestHeader("authorization", "Bearer " + token);
      xhr.send();
    }
   
    function calculaCommits(contribuinte, todosCommits , numerosContribuintes, nomeSprint){
      
      total = todosCommits + total;
    
      nomeContribuinte[contador]  = contribuinte;
      qtdComitsContribuinte[contador] = todosCommits;
     
     
     if(contador == numerosContribuintes - 1){
       console.log("u")
     
     }
      
     contador++;
   
    }