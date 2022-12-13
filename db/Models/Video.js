const { Model } = require('objection');

class Video extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'video';
  }
}
  


  module.exports = Video;
