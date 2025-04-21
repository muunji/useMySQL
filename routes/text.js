//모듈 가져오기
import express from 'express'
import pool from '../server/connect.js'

//암호화 모듈
import bcrypt from 'bcrypt'

//라우터 설정
const router = express.Router()

//GET - 사용자 전체 조회
//조회할 때 비밀번호 제외
router.get('/',(req,res)=>{
  try{
    const [rows] = pool.execute(`SELECT id, text FROM test`)
    res.json(rows)
  }
  catch(err){
    console.error('조회 실패',err)
    // res.status(500).json({error:'조회실패',detail:err})
  }
})

//POST - 사용자 추가
//bcrypt.hash => 비밀번호 해시화
router.post('/',async (req,res)=>{
  // 요청 데이터
  const {text,password} = req.body
  //값이 없으면 에러 처리
  if(!text) return res.status(400).json({error:'내용이 필요합니다'})
  if(!password) return res.status(400).json({error:'비밀번호 필요합니다'})

  try{
    //해시화
    const hashPassword = await bcrypt.hash(password,10)
    //쿼리문 사용
    pool.execute(`INSERT INTO test (text,password) VALUES (?,?)`,[text,hashPassword])
    res.json({message:'비밀번호 추가 완료'})
  }
  catch(err){
    return res.status(500).json({message:'DB 추가 실패',error:err})
  }
})

//PUT - 사용자 수정
router.put('/:id',(req,res)=>{

  //id가져옴
  const id = req.params.id

  //수정할 데이터
  const {text,password} = req.body

  //데이터 없으면 에러
  if(!text) return res.status(400).json({error:'내용이 필요합니다'})

  //쿼리문 사용
  pool.execute(`UPDATE test SET text=? password=? WHERE id=?`,[text,password,id],(err,results)=>{
    if(err) return res.status(500).json({message:'DB 수정 실패',error:err})
    res.json(results)
  })
})

//DELETE = 사용자 삭제
router.delete('/:id',(req,res)=>{
  let id = req.params.id

  //쿼리문 사용
  pool.execute(`DELETE FROM test WHERE id=?`,[id],(err,results)=>{
    if(err) return res.status(500).json({message:'DB 삭제 실패',error:err})
    res.json(results)
  })
})

//내보내기
export default router