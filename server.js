import http from "http";
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeSocket } from "./utils/socket.js";
import setupSwagger from "./config/swagger.js";

//!!!!! App
const app = express();
app.use(cors());
app.use(express.json());

//*** */ Get port from environment variable or use default
const PORT = process.env.PORT || 4000;

//*** */ Database Connection
connectDB();



//TODO Get the current directory
const __filename = fileURLToPath(import.meta.url); //? Get the current file URL
const __dirname = path.dirname(__filename); //? Get the directory name

//TODO Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads'); //? Create the path to the uploads directory
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); //? Create the directory if it doesn't exist
}

//TODO Set up EJS
// Configure Express to use EJS as the templating engine
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));


//***** Define routes
app.use('/api/auth', authRoutes);

//****** */ Serve static files from 'uploads' folder
app.use('/uploads', express.static(uploadsDir));

//***** */ Error handler middleware
app.use(errorHandler);

// Swagger setup
setupSwagger(app);

//! Simple route for testing API
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

//! Create an HTTP Server
const server = http.createServer(app);

//! Initialize Socket.IO
initializeSocket(server);

//! Start Server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
