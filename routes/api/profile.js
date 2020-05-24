const express = require('express')
const router = express.Router();

// route GET api/profile
// This is just a test route
// access value Public
router.get('/', (req,res) => res.send('Profile route'));

module.exports = router;