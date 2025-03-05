const express = require('express');
const router = express.Router();

//render the landing page
router.get('/', (req,res) => {
    res.render('index',{title:'Online Book Store' });
})
module.exports = router;