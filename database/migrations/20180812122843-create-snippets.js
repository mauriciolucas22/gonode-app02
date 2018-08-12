const TABLE_NAME = 'Snippets';

module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable(TABLE_NAME, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      CategoryId: {
        type: DataTypes.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable(TABLE_NAME);
  },
};
