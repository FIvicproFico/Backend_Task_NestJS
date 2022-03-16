module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grapes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      vinmonopoletId: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(50),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('grapes');
  },
};
