const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store_account', {
    account_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'store_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "store_account_pkey",
        unique: true,
        fields: [
          { name: "account_id" },
        ]
      },
    ]
  });
};
