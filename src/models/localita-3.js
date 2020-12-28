const mongoose = require('mongoose')

/**Setting up the model for middleware scopes */
const positionSchema = new mongoose.Schema({
    description: {
        type: String, 
        required:true,
        trim:true
    },
    counts:{
        type: Number,
		required: true,
        default: 0
    }
},
{
    timestamps:true
});

const Task = mongoose.model('PositionTask', positionSchema)

module.exports = PositionTask