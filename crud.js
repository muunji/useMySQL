//mysql 가져오기
const connection = require('./connect.js')

//Create 데이터베이스 생성
const createDB = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS test',(err,results)=>{
    if(err){
      console.error('DB 생성 실패',err)
      return
    }
    console.log('DB 생성 완료',results)
  })
}

//Create 테이블 생성
const createTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
  
  connection.query(sql,(err,results)=>{
    if(err){
      console.error('테이블 생성 실패',err)
      return
    }
    console.log('테이블 생성 완료',results)
  })
}

//데이터 추가
const insertData = (name,age) => {
  const sql = `INSERT INTO users(name,age) VALUES (?,?)`

  connection.query(sql, [name,age],(err,results)=>{
    if(err){
      console.error('데이터 추가 실패',err)
      return
    }
    console.log('데이터 추가 완료',results.insertId)
  })
}

//데이터 조회
const getData = () => {
  connection.query(`SELECT * FROM users`,(err,results)=>{
    if(err){
      console.error('데이터 조회 실패',err)
      return
    }
    console.log('조회된 데이터',results)
  })
}

//데이터 수정
const updateData = (id,newName) => {
  const sql = `UPDATE users SET name = ? WHERE id = ?`

  connection.query(sql,[newName,id],(err,results)=>{
    if(err){
      console.error('데이터 수정 실패',err)
      return
    }
    console.log('데이터 수정 완료',results.affectedRows,'개의 행이 변경됨')
  })
}

//데이터 삭제
const deleteData = (id) => {
  const sql = `DELETE FROM users WHERE id = ?`
  
  connection.query(sql,[id],(err,results)=>{
    if(err){
      console.error('데이터 삭제 실패',err)
      return
    }
    console.log('데이터 삭제 완료',results.affectedRows,'개의 행이 삭제됨')
  })
}

//DB 생성 & 테이블 생성
createDB()
createTable()

//데이터 삽입
//순서대로 실행하기 위해 setTimeout 사용
setTimeout(()=>{
  insertData('minji',26)
  insertData('kim',29)
},1000)
setTimeout(()=>{
  getData()
},2000)
setTimeout(()=>{
  updateData(1,'MJ')
},3000)
setTimeout(()=>{
  deleteData(2)
},4000)
setTimeout(()=>{
  getData()
},5000)

//종료
setTimeout(()=>{
  connection.end()
},6000)