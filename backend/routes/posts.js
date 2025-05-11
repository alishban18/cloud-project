const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM posts WHERE user_id=$1', [req.user.id]);
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  await db.query(
    'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3)',
    [title, content, req.user.id]
  );
  res.sendStatus(201);
});

module.exports = router;