const { db } = require('./db');
const { afks } = require('./models/afk.model');

module.exports.loadDb = async () => {
    await db.sync();
}