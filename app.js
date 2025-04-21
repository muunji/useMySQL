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
    const response = await fetch('http://localhost:8080',{
      method:'POST',
      body: JSON.stringify({text,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data = await response.json()
    
    // 실패했을 때 catch로 전달
    if(!response.ok) throw new Error('DB 추가 실패')

    //성공했을 때 - / 페이지로 이동
    res.redirect('/')

  }
  catch(err){
    console.error('DB 추가 실패',err)
    res.status(500).json({message:'DB 추가 실패',error:err})
  }
})

//서버 실행
app.listen(3010,()=>{console.log('app : http://localhost:3010')})