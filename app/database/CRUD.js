const mysql = require('mysql')
const mySQLPassword = require('./keys.js')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: mySQLPassword,
  database: 'booksDB'
})

// == CREATE ==================================================================
const createTitle = (inputOne, inputTwo, inputThree, inputFour) => {
  let query = connection.query(
    "INSERT INTO readList SET ?",
    {
      title: inputOne,
      author: inputTwo,
      genre: inputThree,
      year: inputFour
    }, 
    function(error, response) {
      console.log(response.affectedRows)
    }
  )
}

// == READ ====================================================================
const readDB = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM readList', (error, response) => {
      resolve(response)
    })
  })
}

// == UPDATE ==================================================================
const updateTitle = (idNumber, input) => {
  connection.query(
    'UPDATE readList SET ? WHERE ?',
    [
      {title: input}, {id: idNumber}
    ], function(error, response) {
      console.log(response.affectedRows)
    }
  )
}

const updateAuthor = (idNumber, input) => {
  connection.query(
    'UPDATE readList SET ? WHERE ?',
    [
      {author: input}, {id: idNumber}
    ], function(error, response) {
      console.log(response.affectedRows)
    }
  )
}

const updateGenre = (idNumber, input) => {
  connection.query(
    'UPDATE readList SET ? WHERE ?',
    [
      {genre: input}, {id: idNumber}
    ], function(error, response) {
      console.log(response.affectedRows)
    }
  )
}

const updateYear = (idNumber, input) => {
  connection.query(
    'UPDATE readList SET ? WHERE ?',
    [
      {year: input}, {id: idNumber}
    ], function(error, response) {
      console.log(response.affectedRows)
    }
  )
}

// == DELETE ==================================================================
const deleteTitle = (input) => {
  connection.query(
    'DELETE FROM readList WHERE ?',
    {id: input}, (error, response) => {
      console.log(response.affectedRows)
    }
  )
}

module.exports = {
  createTitle: createTitle,
  readDB: readDB,
  updateTitle: updateTitle,
  updateAuthor: updateAuthor,
  updateGenre: updateGenre,
  updateYear: updateYear,
  deleteTitle: deleteTitle
}