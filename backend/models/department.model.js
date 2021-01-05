import deadline from './deadline.model.js';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({ 
    departmentName: { type: String, required: true },
    goalTitle: { type: Boolean, required: true },
    goalText: { type: Date, required: false },
    timeline: [deadline],
    members: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{
    timestamps: true
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;