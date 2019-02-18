const Users = require('../models/Users');

async function login(req, res) {
  console.log('[!] User DAO: Login()');
  const user = new Users(req.body);
  const result = await user.login();

  if (!result) {
    res.status(400).json({
      rc: -1,
      message: 'User email or password incorrect'
    });
  } else {
    /* TODO
     * Generate Token!
     */
    return res.status(200).json({
      rc: 0,
      message: 'Process OK',
      user: result
    });
  }
}

module.exports = {
  login
};
