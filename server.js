// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/cron", (req,res) => {
    res.send("ok")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
