module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bottles', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      volume: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      alcohol: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      image_url: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING,
      },
      vinmonopolet_id: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING,
      },
      vectura_id: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      vinmonopolet_link: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING,
      },
      last_provision: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      is_online_available: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_available: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_special: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_public: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
      ingredients: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      sugar: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      acid: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      odour: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      horeca_price: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      taste: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      colour: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      storing_grade: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      production_method: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      packaging_type: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cork_type: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      assortment: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      wholesaler_name: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      carrier: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      main_profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'main_profiles',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      //
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('bottles');
  },
};
