const express = require('express');

const postsRouter = require('../posts/posts-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  const query = res.query;

  console.log("query", query);

  res.status(200).json(query)
})

server.use('/api/posts', postsRouter);

module.exports = server;