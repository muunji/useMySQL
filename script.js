//클래스로 유효성 검사 시도

//제출 이벤트
document.getElementsByTagName('button')[0].addEventListener('click',(e)=>{
  //기본 동작 방지
  e.preventDefault()

  //입력값 가져오기
  const name = document.querySelector('input[name="name"]').value.trim()
  const age = document.querySelector('input[name="age"]').value.trim()
  const email = document.querySelector('input[type="email"]').value.trim()
  const password = document.querySelector('input[type="password"]').value.trim()

  //유효성 검사
  const emailReget = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(!emailReget.test(email)){
    alert('이메일 형식이 아닙니다.')
    return
  }
  
  //console로 전송 시뮬레이션
  const data = {name, age: Number(age), email, password}
  console.log('전송할 데이터',JSON.stringify(data))

  //input 값 초기화
  // e.target.reset()
  console.log('완료')
})