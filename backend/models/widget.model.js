const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const widgetSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    api: { type: String, required: false },
    structure: { type: Mixes, required: true }
},{
    timestamps: true
});

const Widget = mongoose.model('Widget', widgetSchema);

module.exports = Widget;