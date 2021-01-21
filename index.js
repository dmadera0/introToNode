const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response)=>{
response.json({"message": "what up!"})
})

app.listen(4000, () => console.log('Listening on port 4000'))
