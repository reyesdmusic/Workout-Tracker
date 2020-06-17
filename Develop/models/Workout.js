let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let workoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now
    },
 
    exercises: {
        type: Array, 
        required: false
    },

    totalDuration: {
        type: Number, 
        required: false, 
        default: 0
    }
});

let Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;