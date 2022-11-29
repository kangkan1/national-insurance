const router = require("express").Router();
const mainController = require("../controllers/main");
// const view_path = require("../views");
const path = require('path');

router.get("/index",mainController.index);
router.get("/index2",mainController.index2);
router.get("/get/:id",mainController.id);

router.get("/",(req, res) => {
    // res.send('API IS WORKING NOW, YAYY!!');
    // res.render('index')
    res.sendFile(path.join(__dirname+'/../views/index.html'));
  });

module.exports = router;