import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

//파일 설정
app.use(express.static())