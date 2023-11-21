const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const TodoModel = require('./Schema ');

app.use(express.json());
app.use(cors());
console.log(" at backend")

mongoose.connect("/mongodb+srv://chandra_8120:chandra@cluster0.k6nq4jt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority");

app.post('/add', async (req, res) => {

    const task = req.body.task;
    console.log(task, "taskkkkkkkkkk");
    await TodoModel.create({
        task: task

    })
    res.status(200).send("Hello world !!");
})


app.listen(3003, () => { console.log("Server is running") })
