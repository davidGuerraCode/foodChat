const express = require('express');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const usersRoutes = require('./routes/users');
const conversationsRoutes = require('./routes/conversation');
const messagesRoutes = require('./routes/messages');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

/* // Handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Ajustamos los headers de la respuesta. '*' permite el acceso a todos.
  res.header(
    'Access-Control-Allow-Headers', // Definimos que clase de headers queremos aceptar
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
}); */

// Routes
app.use('/users', usersRoutes);
app.use('/conversations', conversationsRoutes);
app.use('/messages', messagesRoutes);
app.use('/auth', authRoutes);

// Handle errors
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, () => console.log(`[+] Server running on port ${PORT}`));
