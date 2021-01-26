const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: String,
    isDone: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
