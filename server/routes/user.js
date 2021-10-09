import express from 'express';
import { signIn, signUp } from '../controller/usercontroller.js';

const router = express.Router();

router.route('/signin').post(signIn);
router.route('/signup').post(signUp);

export default router;
