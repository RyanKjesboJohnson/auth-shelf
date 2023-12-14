const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "item";`
  pool.query(sqlText)
  .then((result) => {
    console.log('reult is:', result.rows);
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('Error with our GET:', error);
    res.sendStatus(500);
  })
 
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',rejectUnauthenticated, (req, res) => {
  const sqlText = `INSERT INTO "item"
                    ("description", "image_url", "user_id")
                    VALUES 
                    ($1, $2, $3);`
  const sqlValues = [req.body.description, req.body.image_url, req.body.user_id]
  pool.query(sqlText, sqlValues)
  .then((result) => {
    console.log('POST route success:', result);
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error with our POST:', error);
    res.sendStatus(500);
  })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id',rejectUnauthenticated, (req, res) => {
  const sqlText = `DELETE FROM "item"
                    WHERE "id" = $1;`
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
  .then((result) => {
    console.log('DELETE route success:', result);
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('Error with our DELETE:', error);
    res.sendStatus(500);
  })
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
