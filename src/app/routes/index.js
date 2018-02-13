import express from 'express';
import backendRoutes from './backendApiRoutes/index';
import frontendRoutes from './frontendApiRoutes/index';

const router = express.Router();

/**
 *
 */
router.use('/bv1', backendRoutes);
router.use('/fv1', frontendRoutes);
/*
 *
 */

export default router;
