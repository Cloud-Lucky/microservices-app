const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({
    service: "order-service",
    status: "running"
  });
});

app.listen(3001, () => {
  console.log("order-service running on port 3001");
});

