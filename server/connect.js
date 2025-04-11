//필요한 모듈 가져오기
const mysql = require('mysql2')
const pool = require('pool')
const dotenv = require('dotenv')

dotenv.config()

const connection = mysql.createPool({
  host:'localhost',
  user:'root',
  password: process.env.PASSWORD,
  database:'express',
  waitForConnections: true,
  connectionLimit:10, //최대 10개 연결 유지
  queueLimit: 0
})