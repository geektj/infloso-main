require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

connectDB();

// CORS configuration
const corsOptions = {
   origin: process.env.BASE_URL || "http://localhost:3000", 
   credentials: true, 
   optionsSuccessStatus: 200, 
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

app.get('/', (req, res) => {
   res.json({ message: "Hello world from backend" });
});

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
