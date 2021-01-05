const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deadlineSchema = new Schema({
    name:{ type: String, required: true },
    date:{ type: Date, require: true }
},{
    timestamps: true
});

const Deadline = mongoose.model('Deadline', deadlineSchema);

module.exports = Deadline;