import express from 'express';
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/authController.js';

const router = express.Router();

router.post('/add', createUser);         // Create user
router.get('/', getUsers);            // Get all users
router.get('/:id', getUserById);      // Get single user by ID
router.put('/:id', updateUser);       // Update user by ID
router.delete('/:id', deleteUser);    // Delete user by ID

export default router;
