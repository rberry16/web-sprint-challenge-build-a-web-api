// Write your "projects" router here!
const express = require('express');
const md = require('./projects-middleware');
const Pro = require('./projects-model');

const router = express.Router();

//gets all projects
router.get('/projects', async (req, res) => {
    const projects = await Pro.get();
    res.json(projects);
})

//gets project by id
router.get('/projects/:id', md.checkId, async (req, res) => {
    const project = await Pro.get(req.params.id);
    res.json(project);
})

//posts new project
router.post('/projects', md.checkProject, async (req, res) => {
    const newProject = await Pro.insert(req.body);
    res.status(201).json(newProject);
});

//updates existing project
router.put('/projects/:id', md.checkId, md.checkCompleted , md.checkProject, async (req, res) => {
    const updatedProject = await Pro.update(req.params.id, req.body);
    res.status(201).json(updatedProject);
});

//deletes project
router.delete('/projects/:id', md.checkId, async (req, res) => {
    await Pro.remove(req.params.id);
    res.json();
})

//gets project actions
router.get('/projects/:id/actions', md.checkId, async (req, res) => {
    const actions = await Pro.getProjectActions(req.params.id);
    res.json(actions);
})

module.exports = router;