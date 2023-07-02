# ai-therapist

Ai therapist is a tool that lets you reach out to an ai powered therapist program.
The program is entirely anonymous and uses the context of a particular session to generate a response.
AI Therapist is a web application that utilizes OpenAI's GPT-3.5 model to provide virtual therapy sessions. Users can have conversations with the AI-powered therapist, which generates responses based on the ongoing conversation. Speach is the preferred mode of communication to make the system more humane and approachable.

## Deployment
The application is deployed and accessible at: [https://virtual-therapist.netlify.app/](https://virtual-therapist.netlify.app/)

## Technologies Used

- MERN stack (MongoDB, Express.js, React.js, Node.js)
- TypeScript
- Next.js
- OpenAI API (GPT-3.5 model)
- MongoDB
- Netlify (for frontend deployment)
- Heroku (for backend deployment)

## Setup and Running Locally

1. Clone the repository: git clone <repository-url>

2. Navigate to the project directory: cd ai-therapist
   
3. Install dependencies: npm install

4. Create a `.env` file in the root directory and provide the following environment variables:
   OPEN_AI_KEY, 
   MONGO_DATABASE

5. Start the development server: npm run dev


6. Start the backend server: node index.js


## Future Scope

The Virtual Therapist application has potential for further improvements and enhancements. Some future scope ideas include:

- Integration of Google's Speech-to-Text and Text-to-Speech APIs to provide voice-based interactions with the virtual therapist.
- Refining the response generation based on user interactions and feedback.
- Supporting multiple therapy sessions simultaneously by managing sessions more efficiently.
- Expanding language support to cater to users from different regions and cultures.

Please note that these future scope ideas require additional resources, bandwidth, and development effort.









