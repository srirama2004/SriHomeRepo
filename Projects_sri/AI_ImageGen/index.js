// index.js
import dotenv from 'dotenv';

dotenv.config();
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
import express from 'express';
import path from 'path';
import openaiRoutes from './controllers/openaiController.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());

// Routes
app.use('/api/openai', openaiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
