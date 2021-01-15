const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema({ 
    senderName: { type: String, required: true },
    status: { type: Boolean, required: true },
    timeOfChange: { type: Date, required: false }
},{
    timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;