/**
 *
 * @param {*} sequelize
 * @param {*} DataTypes
 *
 * DataTypes: usado nas migrations
 */
module.exports = (sequelize, DataTypes) => {
  /**
   * Passa o nome do model, sempre o nome da tabela no singular
   * define as colunas dessa tabela
   * campos id, createAt, updateAt => são preenchidos automaticamente
   */

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Category); // pode possuir varias categorias
  };

  return User;
};
