var express = require("express");
var router = express.Router();
const axios = require('axios');

router.get("/summoner", function (req, res, next) {
    const config = {
        method: 'get',
        url: `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.pseudo}`,
        headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
        "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-4b0f5d14-416e-4451-986e-584fa67bb3c6"}
    }
    axios(config)
        .then(resp => {
            res.send(resp.data);
        });
});

router.get("/matchList", function (req, res, next) {
    const config = {
        method: 'get',
        url: `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.query.puuid}/ids?start=0&count=20`,
        headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
        "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-4b0f5d14-416e-4451-986e-584fa67bb3c6"}
    }
    axios(config)
        .then(resp => {
            res.send(resp.data);
        });
});

router.get("/match", function (req, res, next) {
    const config = {
        method: 'get',
        url: `https://europe.api.riotgames.com/lol/match/v5/matches/${req.query.matchId}`,
        headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
        "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-4b0f5d14-416e-4451-986e-584fa67bb3c6"}
    }
    axios(config)
        .then(resp => {
            res.send(resp.data);
        });
});

module.exports = router;
