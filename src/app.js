const grabData = require('../utils/grabData-2.js')
require('./db/mongoose')

/* importa i modelli */
const localitaRouter = require('./routers/localita')

const path = require('path')
const express = require('express')
const hbs = require('hbs')

/**CREA una nuova applicazione express */
const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // questo comando scarica la richiesta json da postman, fa il parse del json e lo slava in una variabile interna richiamata con req.body in basso

/**Importiamo gli endpoints per le operazioni CRUD! */
app.use(localitaRouter)

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//pagina home
app.get('', (req, res) => {
    res.render('index', {
        title: 'Codata',
        name: 'Amedeo Ebolese @2020',
        dataAggiornamento: '02 dicembre 2020'
    })
})

app.get('/analytics-dashboard/italia', (req, res)=> {
    res.render('graphs',{
        title:'Italia',
        name:'Amedeo Ebolese @2020',
        DDMM:'09 ottobre',
        HHMM: '10:45'
    })
})

app.get('/analytics-dashboard/empoli', (req, res)=> {
    res.render('gis',{
        title:'EVE',
        name:'Amedeo Ebolese @2020'
    })
})

app.get('/analytics-dashboard/drive-through', (req, res)=> {
    res.render('driveThrough',{
        title:'Punti drive-through',
        name:'Amedeo Ebolese @2020',
        dataAggiornamento: '02 dicembre 2020'
    })
})

app.get('/api-data/italia', (req, res)=> {
    grabData((val) =>{
        res.send(val)
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Amedeo Ebolese @2020'
    })
})

/**test per le form */
app.get('/form-test', (req, res) =>{
    console.log('hello world', req.body.firstName)
    res.render('form-test')

})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Not Found',
        name: 'Amedeo Ebolese @2020'
    })
})


// starting up the server:
app.listen(port, () => {
    console.log('Server is up on port 3000.')
})