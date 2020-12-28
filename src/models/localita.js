const mongoose = require('mongoose')

const Reports = mongoose.model('Reports', {
    data_dd: {
        type: Number,
        required:true,
    },
    data_mm: {
        type: Number,
        required:true,
    },
    data_yyyy: {
        type: Number, 
        default: 2020
    },
    Capraia_e_Limite:{
        type: Number,
        default: 0
    },
    Castelfiorentino:{
        type: Number,
        default: 0
    },
    Cerreto_Guidi:{
        type: Number,
        default: 0
    },
    Certaldo:{
        type: Number,
        default: 0
    },
    Empoli:{
        type: Number,
        default: 0
    },
    Fucecchio:{
        type: Number,
        default: 0
    },
    Gambassi_Terme:{
        type: Number,
        default: 0
    },
    Montelupo:{
        type: Number,
        default: 0
    },
    Montespertoli:{
        type: Number,
        default: 0
    },
    Vinci:{
        type: Number,
        default: 0
    },
    San_Miniato:{
        type: Number,
        default: 0
    }
})

module.exports = Reports