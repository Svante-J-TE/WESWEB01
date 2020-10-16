const express = require('express')
const dBModule = require('./dBModule')
const PersonModel = require('./PersonModel')
const MessageModel = require('./MessageModel')
const app = express()
const port = 3000
dBModule.connectToMongoose('test')

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index.ejs', {name: "stranger"})
})

app.get('/messages', async (req, res) =>{
  let messages = await MessageModel.getAllMessages()
  res.render("pages/messages.ejs", {names: messages})
})

app.post('/', (req, res) => {
  dBModule.saveToMongoose(PersonModel.createPerson(req.body.name, req.body.email, req.body.age))

  res.render('pages/index.ejs', {name: req.body.name})
})

app.post('/messages', async (req, res) =>{
  dBModule.saveToMongoose(MessageModel.createMessage(req.body.email, req.body.message))
  let messages = await MessageModel.getAllMessages()
  res.render('pages/messages.ejs', {names: messages})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 
