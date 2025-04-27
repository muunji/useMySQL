// 모듈 가져오기
import jwt from 'jsonwebtoken'

//함수 작성
export function verifyToken(req,res,next){

  //토큰
  const authHeader = req.headers.authorization
  
  //토큰 존재 확인
  if(!authHeader){
    return res.status(401).json({message:'토큰 없음'})
  }
  
  //토큰만 추출
  
  //토큰 검증
}
