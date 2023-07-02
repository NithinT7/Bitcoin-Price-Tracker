const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * Route retrieving data from the CoinCap API.
 */
var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: 'api.coincap.io/v2/assets/bitcoin',
    headers: {
        'Authorization': "2ddfc485-71b6-4c4f-aeef-253900d46ce3"
      }
  };
  router.get('/cap', async (req, res) => {
    try {
        const result = await axios.get(config);
        res.json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;