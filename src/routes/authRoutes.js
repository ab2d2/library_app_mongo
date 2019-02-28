const express = require('express');
const { MongoClient } = require('mongodb');
const chalk = require('chalk');
const debug = require('debug')('app');
const bodyParser = require('body-parser');

const authRouter = express.Router();

function router() {
  authRouter.route('/signUp')
    .post((req, res) => {
      debug(req.body);
      res.json(req.body);
    });
  return authRouter;
};

module.exports = router;
