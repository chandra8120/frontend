const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: String
})
const TodoModel = mongoose.model("Todo1", TodoSchema);

module.exports = TodoModel;