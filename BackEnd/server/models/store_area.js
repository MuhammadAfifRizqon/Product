const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store_area', {
    area_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    area_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'store_area',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "store_area_pkey",
        unique: true,
        fields: [
          { name: "area_id" },
        ]
      },
    ]
  });
};
