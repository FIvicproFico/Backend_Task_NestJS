module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('main_profiles', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      liv_ex_name: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      vin_name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      lwin: {
        unique: true,
        type: Sequelize.STRING(10),
      },
      manufacturer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'manufacturers',
          key: 'id',
        },
        onDelete: 'set null',
      },
      //
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('main_profiles');
  },
};
