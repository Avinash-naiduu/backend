import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Attempt to use DB_URI first, otherwise fall back to LOCAL_URI
        const mongoURI = process.env.DB_URL || process.env.LOCAL_URI;

        if (!mongoURI) {
            throw new Error('Mongo URI is not defined');
        }

        console.log('Mongo URI:', mongoURI);

        await mongoose.connect(mongoURI);

        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
