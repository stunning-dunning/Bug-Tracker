const mongoose = require('mongoose');
const Proj = mongoose.model('Project');

const doAddBug = (req, res, project) => {
    if (!project) {
      res
        .status(404)
        .json({"message": "Project not found"});
    } else {
      const {owner, description, status} = req.body;
      project.bugs.push({
        owner,
        description,
        status
      });
      project.save((err, project) => {
        if (err) {
          res
            .status(400)
            .json(err);
        } else {
          const thisBug = project.bugs.slice(-1).pop();
          res
            .status(201)
            .json(thisBug);
        }
      });
    }
  };
  
  const bugsCreate = (req, res) => {
    const projectId = req.params.projectid;
    if (projectId) {
      Proj
        .findById(projectId)
        .select('bugs')
        .exec((err, project) => {
          if (err) {
            res
              .status(400)
              .json(err);
          } else {
            doAddBug(req, res, project);
          }
        });
    } else {
      res
        .status(404)
        .json({"message": "Project not found"});
    }
  };

  const bugsReadOne = (req, res) => {
    Proj
      .findById(req.params.projectid)
      .select('name bugs')
      .exec((err, project) => {
        if (!project) {
          return res
            .status(404)
            .json({"message": "project not found"});
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
  
        if (project.bugs && project.bugs.length > 0) {
          const bug = project.bugs.id(req.params.bugid);
  
          if (!bug) {
            return res
              .status(404)
              .json({"message": "bug not found"});
          } else {
            const response = {
              project: {
                name: project.name,
                id: req.params.projectid
              },
              bug
            };
  
            return res
              .status(200)
              .json(response);
          }
        } else {
          return res
            .status(404)
            .json({"message": "No bug found"});
        }
      });
  };

  const bugsUpdateOne = (req, res) => {
    if (!req.params.projectid || !req.params.bugid) {
      return res
        .status(404)
        .json({
          "message": "Not found, projectid and bugid are both required"
        });
    }
    Proj
      .findById(req.params.projectid)
      .select('bugs')
      .exec((err, project) => {
        if (!project) {
          return res
            .status(404)
            .json({
              "message": "Project not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        if (project.bugs && project.bugs.length > 0) {
          const thisBug = project.bugs.id(req.params.bugid);
          if (!thisBug) {
            res
              .status(404)
              .json({
                "message": "Bug not found"
              });
          } else {
            thisBug.name = req.body.name;
            thisBug.owner = req.body.owner;
            thisBug.description = req.body.description;
            thisBug.status = req.body.status;
            project.save((err, project) => {
              if (err) {
                res
                  .status(404)
                  .json(err);
              } else {
                //updateOwner(project._id);
                res
                  .status(200)
                  .json(thisBug);
              }
            });
          }
        } else {
          res
            .status(404)
            .json({
              "message": "No bug to update"
            });
        }
      }
    );
  };

  const bugsDeleteOne = (req, res) => {
    const {projectid, bugid} = req.params;
    if (!projectid || !bugid) {
      return res
        .status(404)
        .json({'message': 'Not found, projectid and bugid are both required'});
    }
  
    Proj
      .findById(projectid)
      .select('bugs')
      .exec((err, project) => {
        if (!project) {
          return res
            .status(404)
            .json({'message': 'Project not found'});
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
  
        if (project.bugs && project.bugs.length > 0) {
          if (!project.bugs.id(bugid)) {
            return res
              .status(404)
              .json({'message': 'Bug not found'});
          } else {
            project.bugs.id(bugid).remove();
            project.save(err => {
              if (err) {
                return res
                  .status(404)
                  .json(err);
              } else {
                updateBug(project._id);
                res
                  .status(204)
                  .json(null);
              }
            });
          }
        } else {
          res
            .status(404)
            .json({'message': 'No Bug to delete'});
        }
      });
  };
  
  module.exports = {
    bugsCreate,
    bugsReadOne,
    bugsUpdateOne,
    bugsDeleteOne
  };