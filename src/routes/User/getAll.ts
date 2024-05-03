import express from 'express';
import getAllController from '../../controllers/User/getAll-controller';
const router = express.Router();

router.get('/', getAllController);

export default router;
