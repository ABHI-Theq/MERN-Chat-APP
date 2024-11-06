import express from 'express'
import { getUsersForSideBar } from '../controllers/userControllers.js';
import protectedRoute from '../middles/protectRoute.js';
const router=express.Router();

router.get('/',protectedRoute,getUsersForSideBar)

export default router