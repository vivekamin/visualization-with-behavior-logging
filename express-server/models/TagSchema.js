const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true},
    tag_name : {type: String},

});

module.exports = mongoose.model('TagSchema', tagSchema);