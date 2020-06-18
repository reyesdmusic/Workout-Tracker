const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
    
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function(req, res) {
    
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
   
});

router.post("/api/workouts", ({ body }, res) => {

    Workout.create(body)
      .then(dbWorkout => {
        
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

 router.put("/api/workouts/:id", function(req, res) {

    Workout.updateOne(
        { _id: req.params.id }, 
        { $push: { exercises: req.body } }
        ).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

module.exports = router;
