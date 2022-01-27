const express = require('express');
const mongoose = require('mongoose');

const Rule = mongoose.model('Rule');

const router = express.Router();

router.get('/rules', async (req,res) => {
    const rules = await Rule.find();
    res.send(rules);
});

module.exports = router;