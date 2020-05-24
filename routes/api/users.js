const express = require('express')
const router = express.Router();

// route GET api/users
// This is just a test route
// access value Public
router.get('/', (req,res) => res.send('User route'));

module.exports = router;