const router = require("express").Router();
const Workout = require("../models/Workout");

//Pull all workouts from db, this call is used to render the stats summary of the last workout onto the index.html. The info for the last workout (incl. total duration) is handled in public/workout.js.

router.get("/api/workouts", (req, res) => {

    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Pull all workouts from db, this call is used to render charts, graphs, and summary of all workouts on the stats.html

router.get("/api/workouts/range", function(req, res) {
    
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
   
});

//This creates a new workout

router.post("/api/workouts", ({ body }, res) => {

    Workout.create(body)
      .then(dbWorkout => {       
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//This adds a new exercise to the last workout by using its ID

 router.put("/api/workouts/:id", function(req, res) {

    Workout.updateOne(
        { 
          _id: req.params.id 
        }, 
        { 
          $push: { 
            exercises: req.body 
          } 
        }
        ).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

module.exports = router;
