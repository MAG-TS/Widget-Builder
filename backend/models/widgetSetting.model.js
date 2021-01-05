const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const widgetSettingSchema = new Schema({
    widgetId: { type: String, required: true },
    order: { type: String, required: true },
    size: { type: Number, required: true },
},{
    timestamps: true
});

const WidgetSetting = mongoose.model('WidgetSetting', widgetSettingSchema);

module.exports = WidgetSetting;