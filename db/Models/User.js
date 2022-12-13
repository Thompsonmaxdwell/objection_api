const { Model } = require("objection");

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "user";
  }

  static get relationMappings() {
    const Channel = require("./Channel");
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        join: {
          from: "user.channelId",
          to: "channel.id",
        },
      },
    };  
  }
}

module.exports = User;
