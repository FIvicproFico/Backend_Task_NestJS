module.exports = {
  async up(queryInterface) {
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

  async down(queryInterface) {
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
