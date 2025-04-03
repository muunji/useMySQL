//mysql 가져오기
const connection = require('./connect.js')

//Create

//MySQL에 삽입할 정보를 미리 설정
const username = 'newuser'
const password = 'newpassword'

//INSERT INTO 문법 사용용
const sql = 'INSERT INTO users (username, password) VALUES (?,?)'
connection