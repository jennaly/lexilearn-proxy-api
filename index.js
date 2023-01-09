require('dotenv').config();
require('isomorphic-fetch');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

async function getData(word) {
    const data = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
        headers: {
            'Authorization': `Token ${process.env.OWL_API_KEY}`,
        }
    }).then(r => r.json());

    return data;
};

async function getWordDifficulty(word) {
    const data = await fetch(`https://twinword-language-scoring.p.rapidapi.com/word/?entry=${word}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.TWINWORD_API_KEY}`,
		    'X-RapidAPI-Host':  `${process.env.TWINWORD_API_HOST}`
        }
    }).then(r => r.json());

    return data;
}

app.get('/api/dictionary/:word', async (req, res) => {
    const responseData = await getData(req.params.word);

    res.json(responseData);

});

app.get('/api/difficulty/:word', async (req, res) => {
    const responseData = await getWordDifficulty(req.params.word);

    res.json(responseData);

});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});