const express = require('express');
const router = express.Router();
const db = require('../../db/database');


// Get ALL Parties
router.get('/api/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;
    const params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'Success',
        data: rows
      });
    });
  });
  
  // Get Single Party
  router.get('/api/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.get(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'Success',
        data: rows
      });
    });
  });
  
  // Delete Then Party
  router.delete('/api/party/:id', (req, res) => {
    const sql = `DELETE FROM parties WHERE id = ?`;
    const params = [req.params.id]
    db.run(sql, params, function(err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
  
      res.json({ message: 'Successfully Deleted', changes: this.changes });
    });
  });

  module.exports = router;