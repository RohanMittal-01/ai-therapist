const { MongoClient } = require('mongodb');
const openai = require('openai');

const MONGO_URI = "mongodb+srv://flat-chat:trying123@db.oboqhty.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB connection string
const DB_NAME = 'AITherapist'; // Replace with your MongoDB database name
const COLLECTION_NAME = 'Sessions'; // Replace with your desired collection name

const openaiInstance = new openai.OpenAIApi('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');

async function generateResponse(sessionId, message) {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Retrieve the conversation context from the database
    const sessionContext = await collection.findOne({ sessionId });
    const conversationContext = (sessionContext || (Date.now() - sessionContext.updatedAt.getTime())>24 * 60 * 60 * 1000) ? sessionContext.context : '';

    // Generate the GPT response
    const response = await openaiInstance.complete({
      engine: 'gpt-3.5-turbo', // or any other GPT-3.5 model you prefer
      prompt: conversationContext + message,
      maxTokens: 1000, // adjust according to your desired response length
      temperature: 0.6, // adjust for diversity of responses (lower values are more focused, higher values more random)
      context: conversationContext,
    });

    const reply = response.choices[0].text.trim();

    // Update or insert the conversation context in the database
    await collection.updateOne(
      { sessionId },
      { $set: { sessionId, context: conversationContext + message + reply } },
      { upsert: true }
    );

    return reply;
  } catch (error) {
    console.error('Error generating GPT-3 response:', error);
    return 'An error occurred while generating the response.';
  } finally {
    client.close();
  }
}

module.exports = {
  generateResponse,
};
