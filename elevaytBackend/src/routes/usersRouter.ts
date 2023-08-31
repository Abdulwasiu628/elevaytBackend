import express from 'express';
import { getLogger } from '@/utils/loggers';
import { getUsers } from '@/controllers/users.ctrl';
const router = express.Router();


/* GET users listing. */
router.get('/', getUsers);

export default router;
