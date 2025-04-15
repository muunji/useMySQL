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

//PUT - 사용자 수정

//DELETE = 사용자 삭제

//내보내기