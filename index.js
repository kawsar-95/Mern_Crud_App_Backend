import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from './routes/routes.js'


const app = express()
app.use('/users', route)
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


const PORT = 5000;
const URL = `mongodb+srv://thegodfather95:1234@cluster0.cjcbz.mongodb.net/Cluster0?retryWrites=true&w=majority`

mongoose.connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running Successfully on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log('Error', error.message)
  })
