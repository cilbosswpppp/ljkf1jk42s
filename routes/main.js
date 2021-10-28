__path = process.cwd()

var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://Vinzdb:abc2072006993@cluster0.fxdb1.mongodb.net/Vinzdb?retryWrites=true&w=majority'

function connectMongoDb() {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.on('open', () => {
    cInfo ('Success connecting to database');
  });
};

connectMongoDb()

router.get('/', (req, res) => {
    res.sendFile(__path + '/docs/home.html')
})

router.get('/docs', (req, res) => {
	res.sendFile(__path + '/docs/dashboard.html')
})

router.get('/docs/photooxy', (req, res) => {
	res.sendFile(__path + '/api/photooxy.html')
})

router.get('/docs/media', (req, res) => {
	res.sendFile(__path + '/api/media.html')
})

router.get('/docs/anime', (req, res) => {
	res.sendFile(__path + '/api/anime.html')
})

router.get('/docs/game', (req, res) => {
	res.sendFile(__path + '/api/game.html')
})

router.get('/docs/other', (req, res) => {
	res.sendFile(__path + '/api/other.html')
})

router.get('/docs/downloader', (req, res) => {
	res.sendFile(__path + '/api/downloader.html')
})

router.get('/docs/info', (req, res) => {
	res.sendFile(__path + '/api/info.html')
})

router.get('/docs/islami', (req, res) => {
 	res.sendFile(__path + '/api/islami.html')
})

router.get('/docs/fun', (req, res) => {
	res.sendFile(__path + '/api/fun.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi Prefix',
            namabot: 'DinnSepong Bot',
            namaowner: 'udinnsepong',
            instagram: '@r.doo._',
            github : 'https:\/\/github.com\/Cilbosswp/Simple-Self-Bot',
        }
    }
    res.json(config)
})

module.exports = router
