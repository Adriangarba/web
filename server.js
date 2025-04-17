// server.js
const express = require('express');
const path = require('path');
const cron = require("node-cron")
const axios = require("axios")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/cron", (req, res) => {
    res.send("ok")
})

const keepAwake = async () => {
    try {
        const response = await axios.get("http://localhost:3000/cron")
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}
const job = cron.schedule("*/1 * * * *", keepAwake)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
