
export function GraficoPessoal(nomeContribuinte, qtdComitsContribuinte , sprint){
 

    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        plugins: {
          title: {
            display: true,
            text: sprint,
            fontColor: 'white',
          },
         }
      },
    data: {
        
        labels:  nomeContribuinte,
            datasets: [{
                label: "commits",
                color: "#f4f4f4",
            backgroundColor: [
                "#FFD700",
                "#F08080",
                "#FF00FF",
                "#F4A460",
                "#836FFF", 
                "#00BFFF",
                "#98FB98"
            ],
            data: qtdComitsContribuinte,
            
        },
      ]
    },
    
  });

  
      
  

  }

  export function GraficoGrupoAdicoes(datasets, semanas){
      
    const data = {
      // labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      labels: semanas,
      datasets: datasets,
    };

    var ctx = document.getElementById("myChart1").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      },
        plugins: {
          
          title: {
            display: true,
            text: "Adições Repo"
          }
        }
      },
    data: data
    
  });
  }

  export function GraficoGrupoDelecoes(datasets, semanas){
      
    const data = {
      // labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      labels: semanas,
      datasets: datasets,
    };

    var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      },
        plugins: {
          title: {
            display: true,
            text: "Deleções Repo",
          }
        }
      },
    data: data
    
  });
  }

  export function GraficoGrupoCommits(datasets, semanas){
      
    const data = {
      // labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      labels: semanas,
      datasets: datasets,
    };

    var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      },
        plugins: {
          title: {
            display: true,
            text: "Commits Repo",
          }
        }
      },
    data: data
    
  });


  }