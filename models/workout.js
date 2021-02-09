const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { 
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please Select A Type Of Exercise."
        },
        name: {
          type: String,
          trim: true,
          required: "Please Give The Workout A Name."
        }, 
        duration: {
          type: Number,
          required: "Please Enter A Workout Duration."
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        }
      }
    ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;