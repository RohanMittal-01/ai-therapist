const express = require('express');
const session = require('./routes/session');
const gpt = require('./routes/gpt');
const mongoDB = require('./database');
const app = express();

// Other middleware and configurations
app.use(express.json());
//connect database
mongoDB();

//routes endpoints
app.use('/session', session);
app.use('/gpt', gpt);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



