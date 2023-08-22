const express = require('express');
const router = express.Router();
const Customers = require('../controllers/Customers');

router.post('/customer', Customers.create);
router.get('/customer/:id', Customers.read);
router.put('/customer/:id', Customers.update);
router.delete('/customer/:id', Customers.delete);
router.get('/customers', Customers.readAll);
router.get('/search', Customers.search);

module.exports = router;