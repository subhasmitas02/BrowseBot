// server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

console.log('Cohere API Key:', process.env.COHERE_API_KEY);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const { results, query } = req.body;

  const fullText = results
    .map((r) => `${r.title}: ${r.description}`)
    .join('\n');

  try {
    const cohereResponse = await axios.post(
      'https://api.cohere.ai/v1/summarize',
      {
        text: `Summarize this for query "${query}":\n\n${fullText}`,
        length: "medium",         // or short / long
        format: "paragraph",      // or bullets
        model: "command",         // default summarization model
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ summary: cohereResponse.data.summary });
  } catch (error) {
    console.error('Cohere Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to generate summary using Cohere' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend proxy listening on port ${PORT}`);
});
