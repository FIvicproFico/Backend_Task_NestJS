module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vintages', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vintage: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      main_profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'main_profiles',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('vintages');
  },
};
