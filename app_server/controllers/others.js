const about = (req, res) => {
    res.render('datamend-about-page', {title: 'About Datamend'});
};

module.exports = {
    about,
}