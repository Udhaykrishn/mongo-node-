import express from "express";
const router = express.Router()

import controller from "../controllers/controller";

router.get('/',controller.test)
router.get('/api/data',controller.data)
router.post('/',controller.createUser)
router.get('/find',controller.find)


export default router;
