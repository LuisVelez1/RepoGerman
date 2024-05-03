import express from "express";
import deleteController from "../../controllers/User/delete-controller";
const router = express.Router();

router.delete('/:userId', deleteController);

export default router;