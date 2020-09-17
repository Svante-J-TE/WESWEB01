const ejs = require('ejs');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

let users = [{name: "Niklas", age: 16, color: "blue"}, {name: "Apa", age: 16, color: "purple"}, {name: "Kung", age: 16, color: "red"} ]

app.get('/', (req, res) => res.render(__dirname + '\\index.ejs', {users: users}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))