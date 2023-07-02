const { MongoClient } = require('mongodb');
const { Configuration, OpenAIApi } = require("openai");
const Session = require('./models/Session');

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function generateResponse(sessionId, message) {

  try {
    //Get the conersation from database
    const conversation = await getConversation(sessionId);
    const inputMessage = {"role":"user","content":message};
    console.log(conversation);
    conversation.push(inputMessage);
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // or any other GPT-3.5 model you prefer
      messages: conversation,
    });
    const reply = response.data;
    const data = JSON.parse(JSON.stringify(reply));
    const respond = data.choices[0].message.content;

    //Update the conversation
    const outputMessage = {"role": "system", "content": respond};
    appendConversation(sessionId,inputMessage, outputMessage);
    
    return respond;
  } catch (error) {
    console.error('Error generating GPT-3 response:', error);
    return 'An error occurred while generating the response.';
  } finally {
    //client.close();
  }
};

async function getConversation(sessionId) {
  try {
    const session = await Session.findOne({ sessionId });
    return session.conversation;
  } catch (error) {
    console.error('Failed to retrieve conversation:', error);
    return [{"role":"user","content":"Hey, Behave as a therapist for me"}];
  }
};

async function appendConversation(sessionId, inputMessage, outputMessage) {
  try {
    let session = await Session.findOne({ sessionId });

    if(!session)
      session = await new Session({ sessionId, conversation: [] });
    
    session.conversation.push(inputMessage);
    session.conversation.push(outputMessage);
    await session.save();
    console.log("Messages appended successfully!");
  } catch(err) {
    console.log("error appending to the database" + err);
  }
};

module.exports = {
  generateResponse,
};
