import express from 'express';
import changePasswordController from '../../controllers/User/updatePassword-controller';

const router = express.Router();

router.put('/', changePasswordController);

export default router;
