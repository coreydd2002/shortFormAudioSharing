const express = require('express');   // load express web framework
const cors = require('cors');         // enable cross-origin requests
require('dotenv').config();           // load environment variables

const app = express();                // create express server

// Middleware: run on every request
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
