// Write your "actions" router here!
const express = require('express');
const md = require('./actions-middlware');
const Act = require('./actions-model');

const router = express.Router();

router.get('/actions', async (req, res) => {
    const actions = await Act.get();
    res.json(actions);
})

module.exports = router;