const express = require('express');
const router = express.Router();

const UserService = require('../services/user_service')

/* GET users listing. */
router.get('/', (req, res) => {
  const users = UserService.getAllUsers()
  res.locals.user = users
  res.render('user')
});

// router.post('/', (req, res) => {
//   const users = UserService.getAllUsers()
//   res.locals.user = users
//   res.render('user')
// });

router.post('/', (req, res) => {

  const { firstName, lastName, age } = req.body
  const u = UserService.addNewUser(firstName, lastName, age)
  res.json(u)
});

module.exports = router;
