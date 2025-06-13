const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.use('/', require('./src/routes'));

// Start the server and keep it running
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});