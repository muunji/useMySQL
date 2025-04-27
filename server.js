// 모듈 가져오기
import express from 'express'
import cors from 'cors'
import {createDB, createTable} from './server/create.js'

//로그인 라우터 추가
import authRouter from './routes/auth.js'
app.use('/auth',authRouter)

//express 설정
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//DB 함수 실행
createDB(createTable)

//라우터 사용
import DBRouter from './routes/text.js'
app.use('/',DBRouter)

//서버 실행
app.listen('8080',()=>{
  console.log('server : http://localhost:8080')
})