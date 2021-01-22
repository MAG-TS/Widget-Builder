const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const widgetSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    api: { type: String, required: false },
    header: { type: String, required: true, default: "'Content-Type': 'application/json'" },
    structure: { type: Schema.Types.Mixed, required: true }
},{
    timestamps: true
});

const Widget = mongoose.model('Widget', widgetSchema);

module.exports = Widget;