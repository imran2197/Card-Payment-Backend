const express = require('express');
const cors = require('cors');
const formModel = require('./models/formSchema');

const app = express();
app.use(express.json());
app.use(cors());

const isNullOrUndefined = (value) => !value;

app.post("/CardPayment", async(req, res) => {
    const body = req.body;
    const {cardNumber, expiryDate, cvCode, cardOwner} = body;
    if(isNullOrUndefined(cardNumber) || isNullOrUndefined(expiryDate) || isNullOrUndefined(cvCode) || isNullOrUndefined(cardOwner)){
        res.status(500).json({message: "Please fill all the details"});
    }
    else{
            const newCardPayment = new formModel(body);
            await newCardPayment.save();
            res.status(201).send({message: "Successfully Submitted"});
    }
});

module.exports = app;