const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');


router.get('/', (req, res) => 
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route 
router.post('/', (req, res) => {
    
    const { title, text } = req.body;
   // information for title and text is added
    if (title || !text) {
        const newNote = {
            title, 
            text
        };
       
        readAndAppend(newNote, './db/db.json');
        res.json('New note added');
    } else {
        res.json('Error new note not added');
    }
});
  




module.exports = router;