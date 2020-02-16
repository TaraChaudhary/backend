const express = require ('express');
require('./Database/database')

const bodyParser = require ('body-parser');

const taskrouter= require('./Routes/routes')
const uploadRouter = require('./Routes/upload');
const tasksignal= require('./Routes/routesignal')
const taskcategory= require('./Routes/routescategory')
const path = require("path");
const app=express();

const cors = require('cors')
app.use(cors())
const publicdirectory= path.join(__dirname,'public');
app.use(express.static(publicdirectory))

app.use(express.json())
app.use (bodyParser.urlencoded({extended:false}))
app.use(taskrouter)
app.use(tasksignal)
app.use(taskcategory)
app.use('/upload/image', uploadRouter);

app.listen(5000);