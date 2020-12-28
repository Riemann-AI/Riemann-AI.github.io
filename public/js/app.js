console.log('Client side javascript file is loaded!')

// const weatherForm = document.querySelector('form')
// const searchElement = document.querySelector('input')

const messageData = document.querySelector('#message-data-odierna') // seleziona il paragrafo sulla base del suo id (vedi template)
const messageTamponi = document.querySelector('#message-tamponi') // seleziona il paragrafo sulla base del suo id (vedi template)
const message1 = document.querySelector('#message-1') // seleziona il paragrafo sulla base del suo id (vedi template)
const message2 = document.querySelector('#message-2') // seleziona il paragrafo sulla base del suo id (vedi template)
const message3 = document.querySelector('#message-3') // seleziona il paragrafo sulla base del suo id (vedi template)
const message4 = document.querySelector('#message-4') // seleziona il paragrafo sulla base del suo id (vedi template)
const message5 = document.querySelector('#message-5') // seleziona il paragrafo sulla base del suo id (vedi template)
const message6 = document.querySelector('#message-6') // seleziona il paragrafo sulla base del suo id (vedi template)
const message7 = document.querySelector('#message-7') // seleziona il paragrafo sulla base del suo id (vedi template)

const messagea = document.querySelector('#message-a') // seleziona il paragrafo sulla base del suo id (vedi template)
const messageb = document.querySelector('#message-b') // seleziona il paragrafo sulla base del suo id (vedi template)
const messagec = document.querySelector('#message-c') // seleziona il paragrafo sulla base del suo id (vedi template)
const messaged = document.querySelector('#message-d') // seleziona il paragrafo sulla base del suo id (vedi template)
const messagee = document.querySelector('#message-e') // seleziona il paragrafo sulla base del suo id (vedi template)
const messagef = document.querySelector('#message-f') // seleziona il paragrafo sulla base del suo id (vedi template)
const messageg = document.querySelector('#message-g') // seleziona il paragrafo sulla base del suo id (vedi template)


    fetch('http://localhost:3000/api-data/italia').then((response) => {
    response.json().then((data) => {
        if (data.error){
            message1.textContent =  data.error
        } else {
            console.log(Date())
            var msga = data.data.split("T")[0]
            var resa = msga.match(/\d+/g)
            messageData.textContent = resa[2] +'-'+resa[1] +'-'+resa[0]
            messageTamponi.textContent = (data.tamponi<0?"":"+") + data.tamponi

            message1.textContent = (data.ricoverati_con_sintomi[0]<0?"":"+") + data.ricoverati_con_sintomi[0]
            messagea.textContent = (data.ricoverati_con_sintomi[1]<0?"":"+") + data.ricoverati_con_sintomi[1]
            
            message2.textContent = (data.terapia_intensiva[0]<0?"":"+") + data.terapia_intensiva[0]
            messageb.textContent = (data.terapia_intensiva[1]<0?"":"+") + data.terapia_intensiva[1]


            message3.textContent = (data.isolamento_domiciliare[0]<0?"":"+") + data.isolamento_domiciliare[0]
            messagec.textContent = (data.isolamento_domiciliare[1]<0?"":"+") + data.isolamento_domiciliare[1]

            message4.textContent = (data.totale_positivi[0]<0?"":"+") + data.totale_positivi[0]
            messaged.textContent = (data.totale_positivi[1]<0?"":"+") + data.totale_positivi[1]

            message5.textContent = (data.dimessi_guariti[0]<0?"":"+") + data.dimessi_guariti[0]
            messagee.textContent = (data.dimessi_guariti[1]<0?"":"+") + data.dimessi_guariti[1]

            message6.textContent = (data.deceduti[0]<0?"":"+") + data.deceduti[0]
            messagef.textContent = (data.deceduti[1]<0?"":"+") + data.deceduti[1]

            message7.textContent = (data.totale_casi[0]<0?"":"+") + data.totale_casi[0]
            messageg.textContent = (data.totale_casi[1]<0?"":"+") + data.totale_casi[1]
        }
    })
})