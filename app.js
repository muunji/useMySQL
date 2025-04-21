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
  console.log('1. 요청 확인',req.body)
  const {text, password}=req.body
  try{
    console.log('2. 요청 전송 시도')
    const response = await fetch('http://localhost:8080',{
      method:'POST',
      body: JSON.stringify({text,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })

    console.log('3. fetch 응답 받음:', response.status);

    const data = await response.json()

    console.log('4. 응답 데이터 파싱 완료:', data);
    
    // 실패했을 때 catch로 전달
    if(!response.ok) {
      console.log('5. 오류 응답 반환');
      throw new Error('DB 추가 실패')
    }

    //성공했을 때 - / 페이지로 이동
    console.log('6. 리다이렉트 실행');
    return res.redirect('/')

  }
  catch(err){
    console.error('DB 추가 실패',err)
    res.status(500).json({message:'DB 추가 실패',error:err})
  }
})

//서버 실행
app.listen(3010,()=>{console.log('app : http://localhost:3010')})