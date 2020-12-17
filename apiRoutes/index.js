const express = require("express");
const router = express.Router();
  
// Required Imports
router.use(require("./candidateRoutes"));
router.use(require("./partyRoutes"));
router.use(require("./voterRoutes"));
router.use(require("./voteRoutes"));

module.exports = router;