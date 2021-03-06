const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect("mongodb://localhost:27017/CardPayments", {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8080, () => console.log("Listening on port " +8080));
