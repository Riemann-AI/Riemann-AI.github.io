// var endpoint = '/api-data/cumulative'
var endpoint = 'https://raw.githubusercontent.com/Riemann-AI/node1-covid-webserver-api/main/covid-webserver/public/assets/cumulativeEVD.json'
var defaultData = []
$.ajax({
    method:"GET",
    url: endpoint,
    success: (data) =>{
        data = JSON.parse(data) // cancellare se torno all'end point /api-data-cumulative
        defaultLabels = data[0]
        defaultData = data[1]
        console.log(defaultData.cumulativeCount)
        console.log(defaultData._id.position)
        new Chart(document.getElementById("dnChart3").getContext('2d'), {
            type: 'horizontalBar',
            data: {
            labels: [
                data[0]._id.position,
                data[1]._id.position,//            "Castelfiorentino",
                data[2]._id.position,//"Cerreto Guidi","Certaldo",
                data[3]._id.position,//"Empoli",
                data[4]._id.position,//"Fucecchio",
                data[5]._id.position,// "Gambassi T.",
                data[6]._id.position,//"Montelupo",
                data[7]._id.position,//    "Montespertoli",
                data[8]._id.position,//"Vinci",
                data[9]._id.position],//"San Miniato"],
            datasets: [
                {
                data: [
                    data[0].cumulativeCount,
                    data[2].cumulativeCount,
                    data[3].cumulativeCount,
                    data[3].cumulativeCount,
                    data[4].cumulativeCount,
                    data[5].cumulativeCount,
                    data[6].cumulativeCount,
                    data[7].cumulativeCount,
                    data[8].cumulativeCount,
                    data[9].cumulativeCount],

                label: "Totale casi positivi dal 1 ottobre 2020"
                }
            ]
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                    fontColor: '#050402',
                    fontSize: 10
                    }
                },
                title: {
                    display: false,
                    text: 'Degrado urbano per tipologia nel 2020'
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            fontColor: '#050408',
                            fontSize: 9
                            },
                            gridLines: {
                                display:false
                            },
                            scaleLabel: {
                            display: false
                        },
                        stacked: true
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#050408',
                            fontSize: 10
                            },
                        gridLines: {
                            display:false,
                            drawBorder: true,
                            zeroLineColor: "#fff",
                            zeroLineWidth: 0
                        },
                        stacked: true
                    }]
                }
            }
        })



    }
});