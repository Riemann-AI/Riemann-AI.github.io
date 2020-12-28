/* report_regione.html*/
new Chart(document.getElementById("polar-chart").getContext('2d'), {
    type: 'polarArea',
    data: {
      labels: ["Fi", "Po", "Pt", "Ms", "Lu", "Pi", "Li","Ar","Si", "Gr"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9", "#ff6384", "#36a2eb","#cc65fe", "#ffce56", "#ffce56"],
          data: [28545, 8903, 8845, 6398, 10172, 13995, 7134, 9362, 4156, 3575]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Coronavirus Asl Tc - Aggiornato 11 novembre 2020'
      },
      legend: {
          position: 'bottom'
        }
    }
});