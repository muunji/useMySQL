import express from 'express'
// import mysql from 'mysql2'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
//pool
import pool from './server/connect.js'
// import { createTable } from './server/create.js'
//DB 함수 
// import { createDB,createTable } from './server/create.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

//파일 설정
app.use(express.static(path.join(__dirname,'public')))

//*DB , Table 생성
// createDB(createTable())
// createTable()

//* DB 서버 테스트
//* 라우터 사용
app.get('/check',(req,res)=>{
})

//서버 실행
app.listen(3010,()=>{console.log('app : http://localhost:3010')})