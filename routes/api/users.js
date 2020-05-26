const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User')

// route POST api/users
// This will register user 
// access value Public
router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters'
    ).isLength({ min: 6})
],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }
  // See if user exists

  // get users gravatar

  //encrypt password

  // return jasonwebtoken

  } catch(err) {
      console.error(err.messaage);
      res.status(send('Server error'))
  }

  res.send('User Route');
  }
);

module.exports = router;