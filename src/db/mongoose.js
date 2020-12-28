const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/covid-webserver-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const Report = mongoose.model('Report', {
//     data_dd: {
//         type: Number,
//         required:true,
//     },
//     data_mm: {
//         type: Number,
//         required:true,
//     },
//     data_yyyy: {
//         type: Number, 
//         default: 2020
//     },
//     Capraia_e_Limite:{
//         type: Number,
//         default: 0
//     },
//     Castelfiorentino:{
//         type: Number,
//         default: 0
//     },
//     Cerreto_Guidi:{
//         type: Number,
//         default: 0
//     },
//     Certaldo:{
//         type: Number,
//         default: 0
//     },
//     Empoli:{
//         type: Number,
//         default: 0
//     },
//     Fucecchio:{
//         type: Number,
//         default: 0
//     },
//     Gambassi_Terme:{
//         type: Number,
//         default: 0
//     },
//     Montelupo:{
//         type: Number,
//         default: 0
//     },
//     Montespertoli:{
//         type: Number,
//         default: 0
//     },
//     Vinci:{
//         type: Number,
//         default: 0
//     },
//     San_Miniato:{
//         type: Number,
//         default: 0
//     }
// })

// const me = new Report({
//     data_dd: 22,
//     data_mm: 10,
//     data_yyyy: 2020,
//     Capraia_e_Limite:0,
//     Castelfiorentino:1,
//     Cerreto_Guidi:0,
//     Certaldo:2,
//     Empoli:100,
//     Fucecchio: 11,
//     Gambassi_Terme:0,
//     Montelupo:0,
//     Montespertoli:0,
//     Vinci: 10,
//     San_Miniato: 1
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })