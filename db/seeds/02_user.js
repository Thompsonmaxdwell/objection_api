/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      name: "Thompson",
      email: "oghenefokethompson@gmail.com",
      channelId: 1,
    },
    { id: 2, name: "Max", email: "max@max.com", channelId: 2 },
    { id: 3, name: "john", email: "john@max.com", channelId: 3 },
  ]);
};
