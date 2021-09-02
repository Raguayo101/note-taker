const router = require('express').Router();
const shop = require('../db/shop');

// our api will respond with all the notes from our db
router.get('/notes', (req, res) => {
    shop
        .getUserNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

// post request for notes
router.post('/notes', (req, res) => {
    shop
        .addUserNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

// deltes the notes with id equal to the req
router.delete('/notes/:id', (req, res) => {
    shop
        .removeUserNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;

