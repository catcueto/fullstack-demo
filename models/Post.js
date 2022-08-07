const { Model, Datatypes } = require("sequelize");
const sequelize = require("./config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      tye: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post: {
      type: Datatypes.STRING,
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = Post;
