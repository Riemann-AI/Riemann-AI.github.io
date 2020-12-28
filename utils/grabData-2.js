var request = require('request');

const grabData = (callback) =>{
    var options = {
        'method': 'GET',
        'url': 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json',
        'headers': {
        },
        'json':true
      };
      request(options, (error, {body}) => {
        if (error){
            callback('Unable to connect to location services!')
        } else {
            var L = body.length
            callback(
                {
                    data: body[L-1].data,
                    ricoverati_con_sintomi: [body[L-1].ricoverati_con_sintomi,100*((body[L-1].ricoverati_con_sintomi - body[L-2].ricoverati_con_sintomi)/body[L-1].ricoverati_con_sintomi)],
                    terapia_intensiva: [body[L-1].terapia_intensiva, 100*((body[L-1].terapia_intensiva - body[L-2].terapia_intensiva)/body[L-1].terapia_intensiva)],
                    isolamento_domiciliare: [body[L-1].isolamento_domiciliare, 100*((body[L-1].isolamento_domiciliare - body[L-2].isolamento_domiciliare)/body[L-1].isolamento_domiciliare)],
                    totale_positivi: [body[L-1].totale_positivi, 100*((body[L-1].totale_positivi - body[L-2].totale_positivi)/body[L-1].totale_positivi)],
                    dimessi_guariti: [body[L-1].dimessi_guariti, 100*(((body[L-1].dimessi_guariti - body[L-2].dimessi_guariti)/body[L-1].dimessi_guariti).toFixed(2))],
                    deceduti: [body[L-1].deceduti, 100*((body[L-1].deceduti - body[L-2].deceduti)/body[L-1].deceduti)],               
                    totale_casi: [body[L-1].totale_casi, 100*((body[L-1].totale_casi - body[L-2].totale_casi)/body[L-1].totale_casi)],
                    
                    
                    tamponi: body[L-1].tamponi - body[L-2].tamponi
                }
            )
        }
      })
}

// grabData((val) =>{
//     console.log(val)
// })
module.exports = grabData