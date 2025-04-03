const mysql = require('mysql2')

//MySQL과 연결을 설정
const connection = mysql.createConnection({
  host : 'localhost',
  user:'root',
  password:'',
  database:'test'
})


//MySQL에 연결 시도
connection.connect(err=>{
  if(err){
    console.error('MySQL 연결 실패:',err)
    return
  }
  console.log('MySQL 연결 성공')
})

//내보내기
module.exports = connection