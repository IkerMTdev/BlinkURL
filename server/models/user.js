const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const user = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {},
  },
  {
    timestamps: true,
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

// Excluir la contraseña en las respuestas JSON
user.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

// Método para verificar contraseñas
user.prototype.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = user;
module.exports = user;
