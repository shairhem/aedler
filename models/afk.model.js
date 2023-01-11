const Sequelize = require('sequelize');
const { db } = require('../db');

const afks = db.define('afks', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    time_sent: Sequelize.DATE,
})

module.exports = {
    afks
}
