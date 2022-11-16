const s = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");
class User extends s.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.pass
    );
  }
}

User.init(
  {
    id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: s.STRING,
      allowNull: false,
    },
    lastName: {
      type: s.STRING,
      allowNull: false,
    },
    email: {
      type: s.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true,
    },
    salt: {
      type: s.STRING,
    },
    pass: {
      type: s.STRING,
    },
    isAdmin: {
      type: s.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    SuperAdmin: {
      type: s.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isLogin: {
      type: s.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();

  user.salt = salt;

  return user.hash(user.pass, salt).then((hash) => {
    user.pass = hash;
  });
});

User.beforeUpdate((user) => {
  User.findOne({ where: { id: user.id } }).then((userOld) => {
    if (user.pass !== userOld.pass) {
      const salt = bcrypt.genSaltSync();
      user.salt = salt;
      return bcrypt.hash(user.pass, salt).then((hash) => {
        user.pass = hash;
      });
    }
  });
});

User.afterCreate((user) => {
  if (user.id == 1) {
    User.update({ SuperAdmin: true, isAdmin: true }, { where: { id: 1 } });
  }
});

module.exports = User;
