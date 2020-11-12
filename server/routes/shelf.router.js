const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Get all of the items on the shelf
router.get('/', (req, res) => {

  let queryText = `SELECT * FROM "item";`;

  pool.query(queryText).then((result) => [
    res.send(result.rows)
  ]).catch((error) => {
    console.log('error in get all the things', error);
    res.sendStatus(500);
  })
});


// Add an item for the logged in user to the shelf
router.post('/', (req, res) => {
  // code here
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // DELETE route code here
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // PUT route code here
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // GET /count route code here
});


// Should return all items for certain user_id
router.get('/:id', (req, res) => {
  
  let queryText = `select * from item where user_id = $1;`;

  pool.query(queryText, [req.user.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in getting specific items', error);
    res.sendStatus(500);
  })
});

module.exports = router;
