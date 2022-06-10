// Write your "actions" router here!
const express = require('express');
const md = require('./actions-middlware');
const Act = require('./actions-model');

const router = express.Router();

//gets all actions
router.get('/actions', async (req, res) => {
    const actions = await Act.get();
    res.json(actions);
});

//gets action by id
router.get('/actions/:id', md.checkId, async (req, res) => {
    const action = await Act.get(req.params.id);
    res.json(action);
});

//posts new action
router.post('/actions', md.checkPost, md.checkProject_id, async (req, res) => {
    const newAction = await Act.insert(req.body);
    res.status(201).json(newAction);
});

//updates existing action
router.put('/actions/:id',md.checkId, md.checkPost, async (req, res) => {
    const updatedAction = await Act.update(req.params.id, req.body);
    res.json(updatedAction);
})

//deletes existing action
router.delete('/actions/:id', md.checkId, async (req, res) => {
    await Act.remove(req.params.id);
    res.json();
});

module.exports = router;