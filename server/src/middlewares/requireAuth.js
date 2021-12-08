const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;
    // authorization === 'Bearer 12431odfsimnoqiwjmf'
    // console.log(authorization);

    if (!authorization) {
        return res.status(401).send({error: 'Musisz być zalogowany'});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token,'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'Musisz być zalogowany'});
        }

        const { userId } = payload;
        const user = await User.findById(userId);
        req.user = user;
        next();
    });
};