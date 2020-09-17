const express = require('express');
const router = express.Router();
const ctrlProjects = require('../controllers/projects');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlProjects.homelist);
router.get('/project', ctrlProjects.projectInfo);
router.get('/project/openissues', ctrlProjects.openIssues);
router.get('/project/doneissues', ctrlProjects.doneIssues);
router.get('/project/createdrecently', ctrlProjects.createdRecently);
router.get('/project/resolvedrecently', ctrlProjects.resolvedRecently);
router.get('/project/allissues', ctrlProjects.allIssues);
router.get('/project/issues/new', ctrlProjects.addIssue);

router.get('/about', ctrlOthers.about);

module.exports = router;
