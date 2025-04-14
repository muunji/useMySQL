import express from 'express'
// import mysql from 'mysql2'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
//pool
import pool from './server/connect.js'
//DB 함수 
import { createTable } from './server/create.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

//파일 설정
app.use(express.static(path.join(__dirname,'public')))

//*DB , Table 생성
// createDB()
createTable()

//* DB 서버 테스트
app.get('/check',(req,res)=>{
  //조회 쿼리 작성
  pool.execute(`SELECT * FROM text`,(err,results)=>{
    if(err){
      console.error('DB 조회 에러',err)
      return res.status(500).json({error:'DB 오류'})
    }
    //오류 없으면
    res.json(results)
  })
})

//서버 실행
app.listen(3010,()=>{console.log('app : http://localhost:3010')})