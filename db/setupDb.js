const Knex = require("knex");
const knexfile = require("../knexfile");
const { Model } = require("objection");

function setupDb() {
  const db = Knex(knexfile.development);
  Model.knex(db);
}

module.exports = setupDb;
