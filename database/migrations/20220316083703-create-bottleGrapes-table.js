module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bottles_grapes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      percentage: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      bottle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bottles',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      grape_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'grapes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('bottles_grapes');
  },
};
