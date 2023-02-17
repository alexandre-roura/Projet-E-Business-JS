
const express = require("express");
const app = express();
const parseurl = require("parseurl");
const axios = require("axios");
const API_URL = "https://projetjs-80e6.restdb.io/rest/recettes";
const API_KEY = "f5f56ca424352c1d4f218c983e4589fdcf4f7";


app.post("/ajout", (req, res) => {
    const data = req.body;
    axios
        .post(API_URL, data, {
            headers: {
                "Content-Type": "application/json",
                "x-apikey": API_KEY,
                "cache-control": "no-cache",
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

app.get("/", (req, res) => {
    axios
        .get(API_URL, {
            headers: {
                "Content-Type": "application/json",
                "x-apikey": API_KEY
            }
        })
        .then(response => {
            const recettes = response.data;
            res.send(recettes);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Une erreur est survenue lors de la récupération des recettes.");
        });
});

app.get('/recette/:id', (req, res) => {
    const recetteID= req.params.id;
    // Faites une requête à votre API pour récupérer la recette en utilisant l'ID
    // Exemple avec axios :
    axios.get(`${API_URL}/${recetteID}`, {
        headers: {
            "Content-Type": "application/json",
            "x-apikey": API_KEY,
            "cache-control": "no-cache",
        }
    })
        .then(response => {
            const recette = response.data;
            // Envoyer la recette en tant que réponse HTTP
            res.send(recette);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Une erreur est survenue lors de la récupération de la recette.");
        });
});



app.listen(3000, () => {
    console.log("Server started on port 3000");
})




