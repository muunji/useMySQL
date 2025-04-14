//connect 모듈
import connect from './connect.js'

//DB 생성
const createDB = () => {
  connect.execute('CREATE DATABASE IF NOT EXISTS express',(err)=>{
    if(err) return console.error('DB 생성 실패:',err)
    console.log('DB 생성 완료')
  })
}

//table 생성
const createTable = () => {
  //DB 사용 쿼리
  //DB 생성 쿼리

  //쿼리 사용
}