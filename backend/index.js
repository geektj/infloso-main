require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");

const app = express();

connectDB();

// CORS configuration
const corsOptions = {
   origin: "http://localhost:3000", 
   credentials: true, 
   optionsSuccessStatus: 200, 
};

// Enable CORS with the specified options
app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
