module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  });

  // define a associacao de Category com User
  Category.associate = (models) => {
    Category.belongsTo(models.User); // pertence ao User
    Category.hasMany(models.Snippet); // pode conter varios snippets
  };

  return Category;
};
