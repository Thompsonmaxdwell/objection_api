const { Model } = require("objection");

class Channel extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "channel";
  }
}

module.exports = Channel;
