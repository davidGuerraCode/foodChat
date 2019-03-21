const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function login(req, res) {
  console.log('[!] User DAO: Login()');
  const user = new Users(req.body);
  const result = await user.login();

  if (!result) {
    res.status(404).json({
      rc: -1,
      message: 'User email or password incorrect'
    });
  } else {
    /*
     * Generate Token!
     */
    const token = await jwt.sign(result, process.env.TOKEN_PASSWORD, {
      expiresIn: '1h'
    });

    /* res.clearCookie('access_token', {
      httpOnly: true,
      secure: true
    }); */
    return res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7
      })
      .status(200)
      .json({
        rc: 0,
        message: 'Process OK'
      });
  }
}

module.exports = {
  login
};
