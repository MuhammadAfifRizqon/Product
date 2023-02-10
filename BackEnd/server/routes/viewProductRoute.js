import { Router } from "express";
import IndexController from "../controllers/indexController";


const router = Router()

router.get('/', IndexController.viewProduct.findAll)

export default router