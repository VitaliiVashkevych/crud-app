import express from 'express';

import * as userController from '../controllers/userController.ts';

const router = express.Router();

router.get('/users', userController.getUsers);

export default router;