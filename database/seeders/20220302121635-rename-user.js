module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      'User',
      {
        username: 'Ficek',
      },
      {
        id: 1,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      'Users',
      {
        username: null,
      },
      {
        id: 1,
      },
    );
  },
};
