module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('manufacturers', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      vinmonopolet_id: {
        unique: true,
        allowNull: true,
        type: Sequelize.STRING(15),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('manufacturers');
  },
};
