import express from 'express';
import { getLogger } from '@/utils/loggers';
import { getHomePage } from '@/controllers/index.ctrl';
const router = express.Router();
const logger = getLogger('INDEX_ROUTE');

/* GET home page. */
router.get('/', getHomePage)

export default router;
