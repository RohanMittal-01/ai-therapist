const express = require('express');
const session = require('./routes/session');
const gpt = require('./routes/gpt');

const app = express();

// Other middleware and configurations

app.use('/session', session);

// Other routes and server setup
app.use('/gpt', gpt);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
