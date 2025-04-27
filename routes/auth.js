// 필요한 모듈
import express from 'express'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import pool from '../server/connect.js'
// 미들웨어
const router = express.Router();

// 로그인 라우터
router.post('/login',(req,res)=>{
  
  // 입력값체크
  // DB에서 사용자 찾기
  // 비밀번호 비교
  // 토큰 발급
})


// 내보내기
export default router;