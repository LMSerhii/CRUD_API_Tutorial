import Router from 'express-promise-router';
import { healthMiddleware } from '../middlewares/index.js';
import { healthController } from '../controllers/index.js';

const router = Router();

router.get('/test', healthMiddleware, healthController);

export default router;
