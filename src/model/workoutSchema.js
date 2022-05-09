const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name:  {
        type: String,
        required: true
    },

    mode: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    exercises: {
        type: String,
        required: true
    },
    trainersTip: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

const workoutsSchema = mongoose.model('workout', workoutSchema)
module.export =  workoutsSchema;