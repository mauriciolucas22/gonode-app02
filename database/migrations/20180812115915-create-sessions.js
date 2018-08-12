/**
 * Em up, crie as tabelas: queryInterface.createTable('users', { id: Sequelize.INTEGER });
 * down, remova: queryInterface.dropTable('users');
 */

const TABLE_NAME = 'Sessions';

module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable(TABLE_NAME, {
      sid: {
        // session ID
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },

      // armazena a data de expiração da session
      expires: DataTypes.DATE,

      // dados da session
      data: DataTypes.TEXT,

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
