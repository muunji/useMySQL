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
  //Bearer 토큰 : 형식
  const token = authHeader.split(' ')[1]
  
  try{
    //토큰 검증
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.uesr = decoded //디코딩된 정보 요청에 담기
    next()
  }
  catch(err){
    return res.status(403).json({message:'유효하지 않은 토큰',error:err})
  }
}
