const express = require('express');
const mongoose = require('mongoose');

const Progress = mongoose.model('Progress');

const router = express.Router();

router.post('/progress', async (req,res) => {
    const { userId, title, excNumb, currentDate, grade } = req.body;

    const progress = new Progress({ userId, title, excNumb, currentDate, grade });
    await progress.save();

    res.send(progress);
});

router.get('/progress', async (req,res) => {
    const progress = await Progress.find();
    res.send(progress);
});

module.exports = router;