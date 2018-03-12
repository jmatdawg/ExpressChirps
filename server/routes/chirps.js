let express = require('express');
let chirpsStore = require('../../chirpsStore')
let router = express.Router();


router.get('/:id?', (req, res) => {
    console.log('got chirps');
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    console.log('posted chirp');
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    console.log('updated chirp');
    let id = req.params.id
    chirpsStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    console.log('bye chirp');
    let id = req.params.id
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});



module.exports = router;