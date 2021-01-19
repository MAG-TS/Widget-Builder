
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema({ 
    senderName: { type: String, required: true },
    status: { type: Boolean, required: true },
    timeOfChange: { type: Date, required: false }
},{
    timestamps: true
});

const userSchema = new Schema({
    name:{ type: String, required: false, default: '' },
    jobTitle: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, required: false, default: true },
    message: { type: String, required: false,  max: 200, default: ''},
    myDashboardWidgets: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'myDashboardWidget' 
    },
    notifications: [notificationSchema],
    jiraId: { type: String, required: false, default: null }
},{
    timestamps: true
});



const User = mongoose.model('User', userSchema);

module.exports = User;