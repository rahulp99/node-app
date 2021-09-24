const express = require('express')
const app = express()
const path = require('path')
const port = 5000

app.use(express.static('images'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
