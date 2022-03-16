module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barcodes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      gtin: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      bottle_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bottles',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('barcodes');
  },
};
