module.exports = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {
    getterMethods: {
      //
      excerpt() {
        // this se refere ao snippet
        return this.content.length > 120
          ? `${this.content.substring(0, this.content.lastIndexOf(' ', 120))} ...`
          : this.content;
      },
    },
  });

  // define a associacao de Snippet com User
  Snippet.associate = (models) => {
    Snippet.belongsTo(models.Category);
  };

  return Snippet;
};
