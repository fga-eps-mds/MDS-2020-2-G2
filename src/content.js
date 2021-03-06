//DEFININDO INDEX.JS COMO UM MÓDULO PARA FAZER IMPORTAÇÕES
const script = document.createElement('script');
    script.setAttribute("type", "module");
    script.setAttribute("src", chrome.runtime.getURL('index.js'));
    const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    head.insertBefore(script, head.lastChild);

    function run(numeroMilestone, token,  owner, repo) {
        var dados = [numeroMilestone, token, owner, repo]
        chrome.storage.sync.set({key: dados}, function() {
            console.log('Value is set to ');
          })
      }
   
    document.addEventListener("click", function (e) {

        var currentUrl = String(window.location.href);
        var urlParts = currentUrl.split("/");
       
          
        var token = localStorage.getItem('token');
        
        run(urlParts[6], token, urlParts[3], urlParts[4])
      
    });

    