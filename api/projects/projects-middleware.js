// add middlewares here related to projects
const Pro = require('./projects-model');

async function checkId(req, res, next) {
    const id = await Pro.get(req.params.id);
    if (!id) {
        res.status(404).json({message: 'no project witht that id found'});
    } else {
        next();
    }
}

function checkProject(req, res, next) {
    if (!req.body.name || !req.body.description || req.body.name === undefined || req.body.description === undefined) {
        res.status(400).json({message: 'name and description are required'});
    } else {
        next();
    }
}

module.exports = {
    checkId,
    checkProject
}