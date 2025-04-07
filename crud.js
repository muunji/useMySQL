//mysql 가져오기
const connection = require('./connect.js')

//Create 데이터베이스 생성
const createDB = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS test',(err,results)=>{
    if(err){
      console.error('DB 생성 실패',err)
      return
    }
    console.log('DB 생성 성공')
  })
}