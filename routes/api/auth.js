const express = require('express')
const router = express.Router();

// route GET api/auth
// This is just a test route
// access value Public
router.get('/', (req,res) => res.send('Auth route'));

module.exports = router;