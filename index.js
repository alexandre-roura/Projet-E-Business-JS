
const express = require("express");
const app = express();
const parseurl = require("parseurl");
const axios = require("axios");
const API_URL = "https://projetjs-80e6.restdb.io/rest/recettes";
const API_KEY = "f5f56ca424352c1d4f218c983e4589fdcf4f7";


app.use(express.json());


app.post("/ajout", (req, res) => {
    const data = req.body;
    axios
        .post(API_URL, data, {
            headers: {
                "Content-Type": "application/json",
                "x-apikey": API_KEY,
                "cache-control": "no-cache",a
            },
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    res.send("ok");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})

