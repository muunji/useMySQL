//mysql 가져오기
const connection = require('./connect.js')

//Create

//MySQL에 삽입할 정보를 미리 설정
const username = 'newuser'
const password = 'newpassword'

//INSERT INTO 문법 사용용
const sql = 'INSERT INTO users (username, password) VALUES (?,?)'
connection.query(sql, [username,password],(err,results)=>{
  if(err){
    console.log('데이터 삽입 실패:',err)
    return
  }
  console.log('데이터 삽입 성공',results.insertId)
  connection.end()
})