//필요한 모듈 가져오기
import mysql from 'mysql2'
// import pool from 'pool'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password: process.env.PASSWORD,
  // database:'express',
  port: '3306',
  waitForConnections: true,
  connectionLimit:10, //최대 10개 연결 유지
  queueLimit: 0
})

//연결하기
pool.getConnection((err,connection)=>{
  if(err){
    console.error('연결실패',err.message)
    console.error('MySQL 연결 실패, 전체 오류',err)
    return
  }
  console.log('MySQL 연결 성공')
  connection.release()
})

//내보내기
export default pool
