const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./route/api/user'));
app.use('/api/auth', require('./route/api/auth'));
app.use('/api/post', require('./route/api/post'));
app.use('/api/profile', require('./route/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// run the server ** npm run server
