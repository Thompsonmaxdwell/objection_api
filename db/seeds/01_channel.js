/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("channel").del();
  await knex("channel").insert([
    { id: 1, name: "Thompson3600" },
    { id: 2, name: "Maxwell240" },
    { id: 3, name: "Joe2021" },
    { id: 4, name: "Maryane001" },
    { id: 5, name: "iceberg003" },
  ]);
};
