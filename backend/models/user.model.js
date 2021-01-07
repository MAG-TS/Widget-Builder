// import notification from './notification.model.js';
// import widget from './widget.model.js';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, required: false },
    message: { type: String, required: false,  max: 200},
    // dashboardWidgets: [widget],
    // notifications: [notification],
    // jiraId: { type: String, required: false}

},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;