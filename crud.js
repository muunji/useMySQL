//mysql 가져오기
const connection = require('./connect.js')

//Create 데이터베이스 생성
const createDB = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS test',(err,results)=>{
    if(err){
      console.error('DB 생성 실패',err)
      return
    }
    console.log('DB 생성 완료')
  })
}

//Create 테이블 생성
const createTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS users(
    id INT AUOT_INCRE<ENT PRIMARY LEY,
    name VARCHAR(100),
    age INT
    )`;
  
  connection.query(sql,(err,results)=>{
    if(err){
      console.error('테이블 생성 실패',err)
      return
    }
    console.log('테이블 생성 완료')
  })
}

//데이터 추가
const insertData = () => {}

//데이터 조회
const getData = () => {}

//데이터 수정
const updateData = () => {}

//데이터 삭제
const deleteData = () => {}