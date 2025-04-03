//mysql 가져오기
const connection = require('./connect.js')

//Create 데이터베이스 생성
const createDB = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS test',(err,results)=>{
    if(err){
      console.error('DB 생성 실패',err)
    }
  })
}

//Create 테이블 생성
const createTable = () => {}

//데이터 추가
const insertData = () => {}

//데이터 조회
const getData = () => {}

//데이터 수정
const updateData = () => {}

//데이터 삭제
const deleteData = () => {}