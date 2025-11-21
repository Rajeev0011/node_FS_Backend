const express = require('express');
const cors = require('cors');
const userRouter = require('../router/userRouter.js');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'API is working properly',
    metadata: {
      host: req.hostname,
    },
  });
});

// Import and use user routes
app.use('/users', userRouter);

//handleError
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status || 500,
    },
  });
});

module.exports = app;
