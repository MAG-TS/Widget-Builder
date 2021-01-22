const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const widgetSettingsSchema = new Schema({
    widgetId: { type: String, required: true },
    order: { type: String, required: true },
    size: { type: Number, required: true },
},{
    timestamps: true
});

const myDashboardWidgetSchema = new Schema({
    widgets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Widget' }],
    widgetSettings: [widgetSettingsSchema]
},{
    timestamps: true
});

const MyDashboardWidget = mongoose.model('MyDashboardWidget', myDashboardWidgetSchema);

module.exports = MyDashboardWidget;