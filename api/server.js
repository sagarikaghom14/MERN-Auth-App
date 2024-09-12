import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

// MongoDB connection without deprecated options
mongoose
    .connect(process.env.MONGO, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        connectTimeoutMS: 10000, // Connection timeout after 10 seconds
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// Improved error logging for MongoDB
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const __dirname = path.resolve();
const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

// Server listening on dynamic port for cloud environments
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
