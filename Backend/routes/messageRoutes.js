import express from 'express'
import { sendMsg,getMsgs } from './../controllers/messageController.js';
import protectedRoute from '../middles/protectRoute.js';
const router=express.Router()
router.get('/:id',protectedRoute,getMsgs);
router.post('/send/:id',protectedRoute,sendMsg);

export default router