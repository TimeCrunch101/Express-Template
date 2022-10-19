const DBConnection = require('../../configs/db_config')

let homeView = async (req, res) => {
    return res.render('home')
}

module.exports = {
    homeView
}