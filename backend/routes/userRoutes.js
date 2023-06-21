import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

//register user
router.post('/', registerUser);
//authenticate user
router.post('/auth', authUser);
//logout user
router.post('/logout', logoutUser);
//user profile ------ Update user profile
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;
