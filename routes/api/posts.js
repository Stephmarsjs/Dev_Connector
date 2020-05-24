const express = require('express')
const router = express.Router();

// route GET api/posts
// This is just a test route
// access value Public
router.get('/', (req,res) => res.send('Posts route'));

module.exports = router;