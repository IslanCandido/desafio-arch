const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/admin-controller');

router.get("/notas-admin", AdminController.getAll);
router.post("/notas-admin", AdminController.insertNotas);

module.exports = router;