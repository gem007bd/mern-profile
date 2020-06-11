const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./route/api/user'));
app.use('/api/auth', require('./route/api/auth'));
app.use('/api/post', require('./route/api/post'));
app.use('/api/profile', require('./route/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
