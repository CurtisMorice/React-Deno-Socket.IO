const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({ response: "I am ALIVE" }).status(200);
});


module.exports = router;