const router = require("express").Router();
const mainController = require("../controllers/main");

router.get("/index",mainController.index);
router.get("/",(req, res) => {
    res.send('API IS WORKING NOW, YAYY!!');
  });

module.exports = router;