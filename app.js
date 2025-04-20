import express from 'express'
// import mysql from 'mysql2'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//파일 설정
app.use(express.static(path.join(__dirname,'public')))

// form /connect - db (POST - localhost:8080)
app.post('/connect',async (req,res)=>{
  const {text, password}=req.body
  try{
    const response = await fetch('http:localhost:8080',{
      method:'POST',
      body: JSON.stringify({text,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })

  }
  catch(err){

  }
})

//서버 실행
app.listen(3010,()=>{console.log('app : http://localhost:3010')})