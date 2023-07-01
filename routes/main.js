const express = require('express');
const router = express.Router();
const axios = require('axios');

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
/**
 * Route retrieving data from the Coindesk API.
 */
router.get('/main', async (req, res) => {
    try {
        const result = await axios.get(URL);
        res.json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;