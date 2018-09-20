const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true},
    event_name : {type: String},
    event_relevance: {type: String},


});

module.exports = mongoose.model('EventSchema', eventSchema);