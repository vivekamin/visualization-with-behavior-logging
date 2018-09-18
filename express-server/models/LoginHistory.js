const mongoose = require('mongoose');

const loginHistorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true},
    login_time : {type: Date}
});

module.exports = mongoose.model('LoginHistory', loginHistorySchema);