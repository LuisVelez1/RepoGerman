import express from 'express';
import getOneController from '../../controllers/User/getById-controller';

const router = express.Router();

router.get('/:userId', getOneController);

export default router;