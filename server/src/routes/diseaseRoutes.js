const express = require('express');
const mongoose = require('mongoose');

const Disease = mongoose.model('Disease');

const router = express.Router();

router.get('/diseases', async (req,res) => {
    const diseases = await Disease.find();
    res.send(diseases);
});

module.exports = router;