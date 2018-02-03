// == Dependencies ============================================================
const express = require('express')
const bodyParser= require('body-parser')
const path = require('path')
const CRUD = require('./database/CRUD.js')

// == Express Setup ===========================================================
const app = express()
const port = process.env.PORT || 3306

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// == DATABASE ================================================================
// a function that invokes the readDB() function and stores the database data
// into an array
const runDatabase = () => {
  CRUD.readDB().then((data) => {
    let bookData = []
    data.forEach((item) => {
      let books = {
        id: item.id,
        title: item.title,
        author: item.author,
        genre: item.genre,
        year: item.year
      }
      bookData.push(books)
    })
    return bookData
  })
}

// == SERVER LISTENING ========================================================
app.listen(port, () =>{
  console.log(`Listening on PORT: ${port}`)
})