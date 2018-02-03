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
const createTitle = (title, author, year, rating) => {
  connection.query(
    'INSERT INTO readList SET ?',
    {
      title: title,
      author: author,
      year: year,
      rating: rating
    }, (error, response) => {
      console.log(response.affectedRows)
    }
  )
}

// == READ ====================================================================
const readDB = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELCET * FROM readList', (error, response) => {
      resolve(response)
    })
  })
}

// == UPDATE ==================================================================
const updateDB = (keySet, keyWhere, input, original) => {
  connection.query(
    'UPDATE readList SET ? WHERE ?',
    [
      {keySet: input}, {keyWhere: original}
    ], (error, response) => {
      console.log(response.affectedRows)
    }
  )
}
// == DELETE ==================================================================
const deleteTitle = (keyWhere, input) => {
  connection.query(
    'DELETE FROM readList WHERE ?',
    {keyWhere: input}, (error, response) => {
      console.log(response.affectedRows)
    }
  )
}