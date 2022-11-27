const router = require("express").Router();

router.get("/",(req, res) => {
    res.send('API IS WORKING NOW, YAYY!!');
  });

module.exports = router;