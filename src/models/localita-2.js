const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var msg = new Schema({
    positionName: String,
    count: Number
});

var positionReportSchema = new Schema({
    lastUpdate: Date,
    message: [msg]
});

const positionReport = mongoose.model('positionReport', positionReportSchema)

module.exports = positionReport