import Router from 'express-promise-router';
import { healthMiddleware } from '../middlewares/index';
import { healthController } from '../controllers/index';

const router = Router();

router.get('/test', healthMiddleware, healthController);

export default router;
