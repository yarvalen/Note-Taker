const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

  const createdId = require('createdId');

router.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route 
notes.post('/', (req, res) => {
    
    const { title, text } = req.body;
   // information for title and text is added
    if (title && text) {
        const newNote = {
            title, 
            text, 
            id: createdId({length: 6})
        }
        console.log(title, text)
        readAndAppend(newNote, './db/db.json')
        res.json('Note added succesfully')
    } else {
        res.json('Error in adding the note')
    }
})
  




module.exports = router