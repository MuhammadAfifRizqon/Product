import {Sequelize}  from "sequelize";
import config from "../../config/config";

const sequelize = new Sequelize(
  config.db_name,
    config.db_username,
    config.db_password,
    {
        dialect : 'postgres',
        pool : {
          min : 0,
          max : 5,
          acquire : 30000,
          idle : 1000,
        }
    }
) 

const DataTypes = require("sequelize").DataTypes;
const _product = require("./product");
const _product_brand = require("./product_brand");
const _report_product = require("./report_product");
const _store = require("./store");
const _store_account = require("./store_account");
const _store_area = require("./store_area");

function initModels(sequelize) {
  const product = _product(sequelize, DataTypes);
  const product_brand = _product_brand(sequelize, DataTypes);
  const report_product = _report_product(sequelize, DataTypes);
  const store = _store(sequelize, DataTypes);
  const store_account = _store_account(sequelize, DataTypes);
  const store_area = _store_area(sequelize, DataTypes);


  return {
    product,
    product_brand,
    report_product,
    store,
    store_account,
    store_area,
  };
}
const models = initModels(sequelize);
export default models
export {sequelize}
