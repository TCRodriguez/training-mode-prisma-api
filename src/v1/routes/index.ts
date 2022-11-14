import express from 'express';
import userRoutes from './userRoutes';

const router = express.Router();

// router.get('/', userController.getHello);

router.use('/api/v1/users', userRoutes);

export default router;