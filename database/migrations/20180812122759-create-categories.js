const TABLE_NAME = 'Categories';

/**
 * Nome de tabelas comk relacionamente
 * comecam com letra caixa alta
 */

module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable(TABLE_NAME, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      /**
       * CASCADE:
       * quando alterar o ID no User, atualiza o UserID
       * nessa tabela automaticamente
       */
      UserId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' }, // ref com table Users:id
        onUpdate: 'CASCADE', // quando o registro de id em Users for alterado
        onDelete: 'CASCADE', // se user for deletado e possuir categories, elas (categories) também serão deletadas
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
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
