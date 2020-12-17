// importing express
const express = require("express");
// importing db 
const db = require("./db/database");
const inputCheck = require("./utils/inputCheck");
// port destination 
const PORT = process.env.PORT || 3001;

// app instationated
const app = express();
const sqlite3 = require('sqlite3').verbose();

// importing apiRoutes folder 
const apiRoutes = require("./routes/apiRoutes");

// MITM Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Reroute 666
app.use("/api", apiRoutes);

// Default ReTORT For Other Inueries(Not Found) Catch Em All
app.use((req, res) => {
  res.status(404).end();
});

// Start Node After SUCCESSFUL DB CONNECTION
db.on("open", () => {
  // Big Brother's Listener 
  app.listen(PORT, () => {
    console.log("Node Is Live/Running Via http://localhost:" + PORT);
  });
});
