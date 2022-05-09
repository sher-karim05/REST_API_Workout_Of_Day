const express = require('express');
const workoutController = require('../../controllers/workoutController');

const router = express.Router();

router.get('/', workoutController.getAllWorkouts)
router.get('/:workoutId', workoutController.getOneWorkout)
router.post('/', workoutController.createNewWorkout);
router.patch('/:workoutId', workoutController.updateWorkout);
router.delete('/:workoutId',workoutController.deleteWorkout);

 router.get('/workouts', (req,res)=>{
     res.send('Get all workouts')
 })
 router.get('/:workoutId', (req,res)=>{
     res.send('Get a specific workout')
 })
 router.post('/', (req,res)=>{
     res.send('Create a new workout')
 })
 router.patch('/:workoutId', (req,res)=>{
     res.send('Update an existing workout')
 })
 router.delete('/:workoutId', (req,res)=>{
     res.send('Delete an existing workout')
 })

 module.exports = router;
