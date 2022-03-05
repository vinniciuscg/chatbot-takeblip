const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const PORT = 3006

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
})
