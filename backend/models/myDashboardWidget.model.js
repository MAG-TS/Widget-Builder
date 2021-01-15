import widgetSetting from './widgetSetting.model.js';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myDashboardWidgetSchema = new Schema({
    widgets: { type: mongoose.Schema.Types.ObjectId, ref: 'Widget' },
    widgetInstance: [widgetInstanceSchema]
},{
    timestamps: true
});

const MyDashboardWidget = mongoose.model('MyDashboardWidget', myDashboardWidgetSchema);

module.exports = MyDashboardWidget;