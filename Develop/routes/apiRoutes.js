const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(res.json(dbWorkout))
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function(req, res) {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(res.json(dbWorkout))
    })
    .catch(err => {
      res.status(400).json(err);
    });
   
});

module.exports = router;
