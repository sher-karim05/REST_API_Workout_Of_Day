const workoutSchema = require("../model/workoutSchema");
const workoutService = require("../services/workoutServices");
let workout = workoutSchema;
const createNewWorkout =  async(req, res) => {
   (workout.id = req.body.id),
    (workout.name = req.body.name),
    (workout.mode = req.body.mode),
    (workout.equipment = req.body.equipment),
    (workout.exercise = req.body.exercise),
    (workout.trainerTips = req.body.trainingTips),
    (workout.createdAt = req.body.createdAt),
    (workout.updatedAt = req.body.updatedAt);

  //  await workout.save(req.body)
    await res.json({
      status: "success",
      data: workout,
    });
  try {
    const { body } = req;
    if (
      !body.id ||
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercise ||
      !body.trainerTips
    ) {
      return;
    }

    const newWorkout = {
      id: body.id,
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      trainerTips: body.trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).json({ status: "OK", data: createdWorkout });

    const post = req.body;
    const newPost = new workoutSchema(post);
    res.statusCode(200).json(newPost);
  } catch (err) {
    res.statusCode(404).json({ message: err.message });
  }
};
const getAllWorkouts = (req, res) => {
  workoutSchema.get((err, workout) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Workout data recived successfully",
      data: workout,
    });
  });
};

const getOneWorkout = (req, res) => {
  workout.findById(req.body._id, (err, workout) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Workout Found",
      data: workout,
    });
  });
};

const updateWorkout = async (req, res) => {
  try {
    const {
      body,
      params: { workoutId },
    } = req;
    if (!workoutId) {
      return;
    }
    const updatePost = workoutService.updateWorkout(workoutId, body);
    res.send({ status: "OK", data: updatePost });
  } catch (error) {
    res.statusCode(404).json({ message: err.message });
  }
};

const deleteWorkout = async (req, res) => {
  try {
      workoutSchema.deleteOne({
          _id: req.body.params.workout_id
      }, ((err)=>{
          if(err){
              res.send(err)
          }
          res.json({
              status: 'success',
              message: "One Item deleted"
          })
      }))
  } catch (error) {
    res.status(404).json({ messsage: error.message });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
