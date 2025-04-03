const mysql = require('mysql2')

const connection = mysql.createConnection({
  host : 'localhost',
  user:'root',
  password:'mysqlconnect',
  database:'test'
})

connection.connect(err=>{
  if(err){
    console.error('MySQL 연결 실패:',err)
    return
  }
  console.log('MySQL 연결 성공')
})