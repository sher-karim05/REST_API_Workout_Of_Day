const express = require('express');
const mongooose = require ('mongoose');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json())
app.use('/api/v1/workouts', v1WorkoutRouter)   

//Connect database
const db = require('./db/keys')
mongooose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('MongoDB Connected!..'))

const PROT  = 3000;

app.listen(PROT, () => console.log(`Server listening on port ${PROT}`))
