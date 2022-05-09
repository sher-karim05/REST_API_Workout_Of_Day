const {v4: uuid} = require('uuid');
const getAllWorkouts = () => {
    const allwokouts = Workout.getAllWorkouts();
    return allwokouts;
}

const getOneWorkout = (workoutId) =>{
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
}

const createWorkout = (newWorkout) => {
    const workoutToInsert ={
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: UTC}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: UTC}),
    }
    const createdWorkout = Workout.createWorkout(workoutToInsert)
    return createdWorkout;
}

const updateWorkout = (workoutId, change) =>{
    const updateWorkout = Workout.updateWorkout(workoutId, change);
    return updateWorkout
}

const deleteWorkout = (workoutId)=> {
    const deletedWorkout = Workout.deleteWorkout(workoutId)
    return deletedWorkout;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}