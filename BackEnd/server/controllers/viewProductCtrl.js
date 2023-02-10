import { sequelize } from "../models/init-models"

const findAll = async (req, res) => {
    try {
        await sequelize.query("select a.brand_name, sum(c.compliance),e.area_name, count(c.compliance) as row,ROUND(sum(c.compliance)/COUNT(*))*100 as round from product_brand a join product b on a.brand_id = b.brand_id join report_product c on b.product_id = c.product_id join store d on c.store_id = d.store_id join store_area e on d.area_id = e.area_id  join store_account f on d.account_id = f.account_id group by a.brand_name, e.area_name,c.compliance;",
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default  {
    findAll
}