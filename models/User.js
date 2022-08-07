const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

// The init function accepts 2 parameter --> the first one are the columns you want to define, while the second one is the connection to sequelize (details of how the table will be generated)
User.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      password: {
        type: Datatypes.STRING,
        allowNull: false,
        valiadte: {
          // length must be 8 characters or greater
          len: [8],
        },
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

module.exports = User;
