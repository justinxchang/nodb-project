const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const ctrl = require('./controller')

app.use(bodyParser.json())


app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)





const PORT = 4567
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})