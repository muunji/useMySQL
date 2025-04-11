//필요한 모듈 가져오기
import mysql from 'mysql2'
import pool from 'pool'
import dotenv from 'dotenv'
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

//연결하기
connection.connect(err=>{
  if(err){
    console.err('MySQL 연결 실패',err)
    return
  }
  console.log('MySQL 연결 성공')
})

//내보내기
export default connection