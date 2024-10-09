const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
// const connectDB = require('./config/database');
// const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/', require('./routes/authRoutes'))

const PORT = 8000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

// connectDB();

// app.use(express.json());

// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));