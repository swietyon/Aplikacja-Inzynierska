const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password, birth, gender} = req.body;

    try {
        const user = new User({ username, email, password, birth, gender});
        await user.save();

        const token = jwt.sign({ userId: user._id },'MY_SECRET_KEY');
        res.send({ user, token });
    }
    catch (err){
        res.status(422).send(err.message);
    }    
});

router.post('/signin', async (req,res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(422).send({error: 'Musisz wprowadzić dane'});
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: 'Taki email nie istnieje'});
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    }
    catch (err){
        return res.status(422).send({error: 'Źle wprowadzone hasło lub email'});
    }
    
});

module.exports = router;