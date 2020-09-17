const mongoose = require('mongoose');
const Proj = mongoose.model('Project');

const projectsCreate = (req, res) => {
    Proj.create({
        name: req.body.name,
        owner: req.body.owner,
        description: req.body.description,
    },
        (err, project) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(project);
            }
        });
};
const projectsReadOne = (req, res) => {
    Proj
        .findById(req.params.projectid)
        .exec((err, project) => {
            if (!project) {
                return res
                    .status(404)
                    .json({ "message": "project not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(project);
            }
        });
};
const projectsUpdateOne = (req, res) => {
    if (!req.params.projectid) {
        return res
            .status(404)
            .json({
                "message": "Not found, projectid is required"
            });
    }
    Proj
        .findById(req.params.projectid)
        .select('-bugs -description')
        .exec((err, project) => {
            if (!project) {
                return res
                    .status(404)
                    .json({
                        "message": "projectid not found"
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            project.name = req.body.name;
            project.owner = req.body.owner;
            project.description = req.body.description;
            project.save((err, project) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(project);
                }
            });
        }
        );
};
const projectsDeleteOne = (req, res) => {
    const { projectid } = req.params;
    if (projectid) {
        Proj
            .findByIdAndRemove(projectid)
            .exec((err, project) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            }
            );
    } else {
        res
            .status(404)
            .json({
                "message": "No Project"
            });
    }
};

const getAllProjects =(req, res) => {
    Proj.find({}, function(err, projects) {
        if(err) {
            res.send(err);
            return;
        }
        res.json(projects);
    });

}

module.exports = {
    projectsCreate,
    projectsReadOne,
    projectsUpdateOne,
    projectsDeleteOne,
    getAllProjects
};