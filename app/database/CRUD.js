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
const updateDB = (title, author, year, rating) => {
  connection.query(
    'UPDATE products SET ? WHERE ?',
    [
      {stock_quantity: amount},
      {item_id: id}
    ],
    (error, response) => {
      console.log(chalk.gray('Updated stock'))
    }
  )
}
