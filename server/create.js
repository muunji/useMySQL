//connect 모듈
import connect from './connect.js'

//DB 생성
const createDB = (callback) => {
  connect.execute('CREATE DATABASE IF NOT EXISTS express',(err)=>{
    if(err) return console.error('DB 생성 실패:',err)
    console.log('DB 생성 완료')
  })

  callback
}

//table 생성
const createTable = () => {
  //DB 사용 쿼리
  const useDB = `USE express;`
  //DB 생성 쿼리
  const makeTable = `CREATE TABLE IF NOT EXISTS text(
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL
  );`

  //쿼리 사용
  connect.query(useDB,(err)=>{
    if(err) return console.error('DB 선택 실패:',err)

    connect.query(makeTable,(err)=>{
      if(err) return console.error('테이블 생성 실패:',err)
      console.log('테이블 생성 완료')
    })
  })
}

export {createDB, createTable}