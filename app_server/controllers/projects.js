const homelist = (req, res) => {
    res.render('project-list', { title: 'Projects' });
};

const projectInfo = (req, res) => {
    res.render('project-info', { title: 'Project Summary' });
};

const openIssues = (req, res) => {
    res.render('project-active-issues', { title: 'Open and Active Issues' });
};

const doneIssues = (req, res) => {
    res.render('project-resolved-issues', { title: 'Resolved/Closed Issues' });
};

const createdRecently = (req, res) => {
    res.render('project-recently-opened', { title: 'Issues recently Opened' });
};

const resolvedRecently = (req, res) => {
    res.render('project-recently-closed', { title: 'Issues recently Closed' });
};

const allIssues = (req, res) => {
    res.render('project-issues-history', { title: 'Projects Issue History' });
};

const addIssue = (req, res) => {
    res.render('project-new-issue', { title: 'Project New Issue' });
};

module.exports = {
    homelist,
    projectInfo,
    openIssues,
    doneIssues,
    createdRecently,
    resolvedRecently,
    allIssues,
    addIssue
};