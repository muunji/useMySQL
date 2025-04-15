//모듈 가져오기
import express from 'express'
import pool from '../server/connect.js'

//라우터 설정
const router = express.Router()

//GET - 사용자 전체 조회
router.get('/',(req,res)=>{
  //쿼리문 사용
  pool.execute(`SELECT * FROM test`,(err,results)=>{
    if(err) return res.status(500).json('DB 조회 실패',err)
    res.json(results)
  })
})

//POST - 사용자 추가
router.post('/',(req,res)=>{
  // 요청 데이터
  const {text} = req.body
  //값이 없으면 에러 처리
  if(!text) return res.status(400).json({error:'내용이 필요합니다'})
  //쿼리문 사용
  pool.execute(`INSERT INTO test (text) VALUES (?)`,[text],(err,results)=>{
    if(err) return res.status(500).json({message:'DB 추가 실패',error:err})
    res.json(results)
  })
})

//PUT - 사용자 수정

//DELETE = 사용자 삭제

//내보내기