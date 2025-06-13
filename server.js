const express = require('express');
const mongodb = require('./src/config/db');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.use('/', require('./src/routes'));

mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }
  else {
    app.listen(PORT, () => {console.log(`Database is listening and node Running on port ${PORT}`) });
  }
})

// Start the server and keep it running
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});