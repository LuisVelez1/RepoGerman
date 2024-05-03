import express from "express";
import registerController from "../../controllers/User/register-controller";
const router = express.Router();

router.post('/', registerController);


export default router;