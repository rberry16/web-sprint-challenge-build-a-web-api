// add middlewares here related to actions
const Act = require('./actions-model');
const Pro = require('../projects/projects-model');

async function checkId(req, res, next) {
    const action = await Act.get(req.params.id);
    if (!action) {
        res.status(404).json({message: 'no action with that id found'});
    } else {
        next();
    }
}

async function checkPost(req, res, next) {
    if (!req.body.description || req.body.description === undefined ||
        !req.body.notes || req.body.notes === undefined) {
            res.status(400).json({message: 'description and notes are required'});
        } else {
            next();
        }
}

async function checkProject_id(req, res, next) {
    const project = await Pro.get(req.body.project_id);
    if (!project) {
        res.status(404).json({message: 'no project with that project_id found'});
    } else {
        next();
    }
}

module.exports = {
    checkId,
    checkPost,
    checkProject_id
}