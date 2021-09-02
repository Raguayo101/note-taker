const path = require('path')
const router = require('express').Router();

// web route for notes responds with the html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// gets the remaing html to repond with our route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;

