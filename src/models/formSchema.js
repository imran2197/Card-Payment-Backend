const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    cardNumber: Number,
    expiryDate: String,
    cvCode: Number,
    cardOwner: String,
});

const formModel = mongoose.model("cardDetail", formSchema);

module.exports = formModel;
