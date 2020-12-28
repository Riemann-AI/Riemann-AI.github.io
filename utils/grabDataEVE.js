var request = require('request');

const grabDataEVE = (callback) =>{
    var options = {
        'method': 'GET',
        'url': 'https://raw.githubusercontent.com/Riemann-AI/node1-covid-webserver-api/main/covid-webserver/public/assets/cumulativeEVD.json',
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
                    data_yyyy: body[L-1].data_yyyy,
                    capraia_e_limite: body[L-1].Capraia_e_Limite,
                    castelfiorentino: body[L-1].Castelfiorentino,
                    cerreto_guidi: body[L-1].Cerreto_Guidi,
                    certaldo: body[L-1].Certaldo,
                    empoli: body[L-1].Empoli,
                    fucecchio: body[L-1].Fucecchio,
                    gambassi_terme: body[L-1].Gambassi_Terme,
                    montelupo: body[L-1].Montelupo,
                    vinci: body[L-1].Vinci,
                    san_miniato: body[L-1].San_Miniato,
                    data_dd: body[L-1].data_dd,
                    data_mm: body[L-1].data_mm
                }
            )
        }
      })
}

// grabData((val) =>{
//     console.log(val)
// })
module.exports = grabDataEVE