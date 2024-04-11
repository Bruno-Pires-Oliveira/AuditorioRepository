const config = require("../../../Knexfile");

const knex = require("knex");

const connection = knex(config.development);

module.exports = connection;
