import express from 'express';
import loginRoutes from './v1Api/login';

const router = express.Router();

/**
 *
 */
router.use('/api/login', loginRoutes);

/*
 *
 */

export default router;
