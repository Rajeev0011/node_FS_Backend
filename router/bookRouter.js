const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - Get',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - Get Based on ID',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.post('/', (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: 'Successful - Post',
    metadata: {
      name: name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - Put Based on ID',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - Delete Based on ID',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
