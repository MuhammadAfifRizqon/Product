const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_brand', {
    brand_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brand_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product_brand',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_brand_pkey",
        unique: true,
        fields: [
          { name: "brand_id" },
        ]
      },
    ]
  });
};
