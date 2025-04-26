const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000;
app.use(express.json())

app.get('/api/spells', (req, res) => {
    const data = fs.readFileSync('spells.json', 'utf-8')
    const spells = JSON.parse(data)
    res.json(spells)
})

app.post('/api/spells', (req, res) => {
    const data = fs.readFileSync('spells.json', 'utf-8')
    const spells = JSON.parse(data)
    const newSpell = req.body
    spells.push(newSpell)
    fs.writeFileSync('spells.json', JSON.stringify(spells, 'utf-8'))
    res.json(spells)        
})

app.listen(port, () => {
    console.log('Spellbook server is running on port 3000')
})
