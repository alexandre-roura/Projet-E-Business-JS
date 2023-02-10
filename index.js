const axios = require("axios");
const API_URL = "https://projetjs-80e6.restdb.io/rest/recettes";
const API_KEY = "f5f56ca424352c1d4f218c983e4589fdcf4f7";

const data = {
    nom: "Prout musclé",
};

axios
    .post(API_URL, data, {
        headers: {
            "Content-Type": "application/json",
            "x-apikey": API_KEY,
        },
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });