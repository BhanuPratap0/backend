const connectToMongo=require('./db')

connectToMongo();
var cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello Bhanu!')
})

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})

