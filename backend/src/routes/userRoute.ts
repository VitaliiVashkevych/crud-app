import express from 'express';

import * as userController from '../controllers/userController.ts';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;