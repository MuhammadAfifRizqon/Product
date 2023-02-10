const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    store_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    store_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'store',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "store_pkey",
        unique: true,
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
