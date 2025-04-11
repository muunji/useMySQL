//필요한 모듈 가져오기
const mysql = require('mysql2')
const pool = require('pool')
const dotenv = require('dotenv')

dotenv.config()

const connection = mysql.createPool({
  host:'localhost',
  user:'root',
  
})