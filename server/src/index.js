require('./models/User');
require('./models/Disease');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(diseaseRoutes);

const mongoUri = 'mongodb+srv://admin:zaq1%40WSX@cluster0.4m9pl.mongodb.net/InzServer?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log('Connected to mongo');
})
.catch( (err) => {
    console.error('Error connecting to mongo', err);
});

//request and response
app.get('/', requireAuth, (req, res) => {
    // res.send(`Twój email: ${req.user.email}`);
    console.log(req.user);
    res.send(`${req.user}`);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
