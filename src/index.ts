require('dotenv').config()

import express from 'express';
import { agent } from './agent';
import { HumanMessage } from '@langchain/core/messages';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/agent', async (req, res) => {
  try {
    console.log("Calling agent...");
    const result = await agent.invoke({
        messages: [
            new HumanMessage(req.body.message)
        ]
    });
    const AIResponse = result.messages[result.messages.length - 1].content;
    console.log('Agent response:', AIResponse);
    res.send(AIResponse);
  } catch (error) {
    console.error('Error processing request:', error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

