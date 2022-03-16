module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('bottles', 'vintage_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'vintages',
        key: 'id',
      },
      onDelete: 'cascade',
      after: 'main_profile_id',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('bottles', 'vintage_id');
  },
};
