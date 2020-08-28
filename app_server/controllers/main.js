/* GET homepage */
const index = (req, res) => res.render('index', { title: 'Datamend '});

module.exports = {
  index
};