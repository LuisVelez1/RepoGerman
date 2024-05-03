import express from "express";
import authController from '../controllers/AuthController/auth-controller';
const router = express.Router();


router.post('/', authController);

export default router;


