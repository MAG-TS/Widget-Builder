import widgetSetting from './widgetSetting.model.js';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const officeDashboardSchema = new Schema({
    widgets: { type: mongoose.Schema.Types.ObjectId, ref: 'Widget' },
    widgetSettings: [widgetSetting]
},{
    timestamps: true
});

const OfficeDashboard = mongoose.model('OfficeDashboard', officeDashboardSchema);

module.exports = OfficeDashboard;