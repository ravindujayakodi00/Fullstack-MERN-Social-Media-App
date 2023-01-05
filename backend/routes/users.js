import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { 
    getUser,
    getUsersFriends,
    addRemoveFriend,
} from '../controllers/userController.js';

const router = express.Router();

//Read
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUsersFriends);

//Update
router.patch('/:id/:friendId', verifyToken, addRemoveFriend)


export default router;