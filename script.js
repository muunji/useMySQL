//클래스로 유효성 검사 시도
class Validator{
  constructor(name, age, email, password){
    this.name = name
    this.age = age
    this.email = email
    this.password = password
  }
  
  set name(name){
    this._name = name
  }

  get name(){
    return this._name
  }

  set age(age){
    if(isNaN(age) || Number(age)<= 0){
      throw new Error('올바른 나이를 입력하세요.')
    }
    this._age = age
  }
  get age(){
    return this._age
  }

  set email(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
      throw new Error('올바른 이메일 주소를 입력하세요.')
    }
    this._email = email
  }

  get email(){
    return this._email
  }

  set password(password){
    if(password.length < 8){
      throw new Error('비밀번호는 최소 8자 이상이어야 합니다.')
    }
    this._password = password
  }

  get password(){
    return this._password
  }
}

//제출 이벤트
document.getElementsByTagName('button')[0].addEventListener('click',(e)=>{
  //기본 동작 방지
  e.preventDefault()

  //입력값 가져오기
  const name = document.querySelector('input[name="name"]').value.trim()
  const age = document.querySelector('input[name="age"]').value.trim()
  const email = document.querySelector('input[type="email"]').value.trim()
  const password = document.querySelector('input[type="password"]').value.trim()
  
  //console로 전송 시뮬레이션
  try{
    const data = new Validator(name, age, email, password)
    console.log('전송할 데이터',JSON.stringify(data))
  } catch(err){
    alert(err.message)
    return
  }

  //input 값 초기화
  // e.target.reset()
  console.log('완료')
})