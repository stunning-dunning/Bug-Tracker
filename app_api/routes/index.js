const express = require('express');
const router = express.Router();
const ctrlProjects = require('../controllers/projects');
const ctrlBugs = require('../controllers/bugs');

// projects
router
  .route('/projects')
  .get(ctrlProjects.getAllProjects)
  .post(ctrlProjects.projectsCreate);

router
  .route('/projects/:projectid')
  .get(ctrlProjects.projectsReadOne)
  .put(ctrlProjects.projectsUpdateOne)
  .delete(ctrlProjects.projectsDeleteOne);

// bugs
router
  .route('/projects/:projectid/bugs')
  .post(ctrlBugs.bugsCreate);

router
  .route('/projects/:projectid/bugs/:bugid')
  .get(ctrlBugs.bugsReadOne)
  .put(ctrlBugs.bugsUpdateOne)
  .delete(ctrlBugs.bugsDeleteOne);

module.exports = router;