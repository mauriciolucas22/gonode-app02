module.exports = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  // define a associacao de Snippet com User
  Snippet.associate = (models) => {
    Snippet.belongsTo(models.Category);
  };

  return Snippet;
};
