const express = require('express');
// const { signup, login } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
const cors = require('cors');
const {test} = require('../controllers/authController')

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', test);



// router.post('/signup', signup);
// router.post('/login', login);

// // Example protected route
// router.get('/protected', protect, (req, res) => {
//   res.json({ message: 'This is a protected route', user: req.user });
// });

module.exports = router;