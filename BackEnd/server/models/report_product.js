const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_product', {
    report_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    compliance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'report_product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "report_product_pkey",
        unique: true,
        fields: [
          { name: "report_id" },
        ]
      },
    ]
  });
};
