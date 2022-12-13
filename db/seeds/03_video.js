/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("video").del();
  await knex("video").insert([
    { id: 1, title: "Jack the  giant slayer", channelId: 1 },
    { id: 2, title: "The Pot of  life", channelId: 2 },
    { id: 3, title: "Coming home part 34", channelId: 4 },
  ]);
};
