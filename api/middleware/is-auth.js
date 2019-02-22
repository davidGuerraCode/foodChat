const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
  /* const authHeader = req.get('Authorization');
  // Validar si existe un header de autorización
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(' ')[1];
  // Validar existencia del token
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }

  let decodedToken;

  try {
    // Validar el token
    decodedToken = jwt.verify(token, process.env.TOKEN_PASSWORD);
  } catch (error) {
    console.log(error);

    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.id = decodedToken.id;

  next(); */

  try {
    // Get the token
    const token = req.get('Authorization').split(' ')[1];
    // Decoded token
    const decoded = jwt.verify(token, process.env.TOKEN_PASSWORD);
    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      rc: -1,
      message: 'Unauthenticated user'
    });
  }
};
