import 'dotenv/config'
import express  from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import models,{sequelize} from "./models/init-models";
import indexRoute from './routes/indexRoute'

const port  = process.env.PORT || 3000
const app = new express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(async(req, res, next)=>{
    req.context = {models}
    next()
})

//middleware
app.use("/viewProduct",indexRoute.ViewProductRoute)

const dbDrop = false

sequelize.sync({ force: dbDrop }).then(async () => {
    if (dbDrop) {
      console.log("Database do not drop");
    }
    app.listen(port, () => {
      console.info("Server listen on " + port);
    });
  });
  
  
  export default app