import { Router } from 'express';
import Cmain from '../controller/Cmain';
const router = Router();

router.get('/', Cmain.getMainPage);

export default router;
