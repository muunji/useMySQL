import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

//파일 설정
app.use(express.static(path.join(__dirname,'public')))

//서버 실행
app.listen(3010,()=>{console.log('app : http://localhost:3010')})