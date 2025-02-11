// src/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    // Step 1: Basic Details
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },

    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
export default User;




