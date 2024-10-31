// controllers/openaiController.js
import express from 'express';
import OpenAI from 'openai';

const router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post('/generate-image', async (req, res) => {
    const { prompt } = req.body;

    try {
        const image = await openai.images.generate({
            model: 'dall-e-3',
            prompt: prompt,
        });
        res.json(image.data);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
