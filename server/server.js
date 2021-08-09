const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const searchController = require('./controllers/searchControllers')

app.use(bodyParser.json())

app.get('/api/search', (req, res) => {
    res.send('HEYO')
}) 

app.post('/api/retailsearch', async (req, res) => {
    let items = await searchController.runRetailMetadataQuery(req.body)
})

app.post('/api/search', async (req, res) => {
    console.log('HERE')
    let items = await searchController.runMetadataQuery(req.body)
    console.log('ITEMS', items)
    res.status(200).json({files: items})
})

app.listen(8080, () => {
    console.log('Example app listening on port 3000!')
})