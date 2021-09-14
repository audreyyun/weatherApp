const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/testing', (req, res) => {
    res.json({msg: 'Weather routes'})
});


module.exports = router;