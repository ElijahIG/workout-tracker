const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a type of workout",
      },
      name: {
        type: String,
        required: "Enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Enter duration amount",
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;