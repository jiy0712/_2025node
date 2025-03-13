// http 모듈을 가져옵니다.
const http = require('http');

// 서버를 생성합니다.
const server = http.createServer((req, res) => {
  // HTTP 응답 헤더 설정
  res.writeHead(200, { 'Content-Type': 'text/plain' }); //200 : 성공, plain(평문으로 된 컨텐츠다)

  // 응답 본문에 'Hello, World!'를 보냅니다.
  res.end('Hello, World!\n');
});

// 서버가 포트 3000에서 요청을 대기합니다.
server.listen(3000, () => { // listen : 서버가 잘 되고 있는지 체크해주는
  console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});

//express 모듈 : node.js를 더 간단히 할 수 있는 프레임워크
//JS는 const
//상태코드 : 100,200,300,400,500.... (200 : 성공, 404 : 에러) (200번대는 성공, 400번대는 클라이언트에 의한 오류, 500번대는 서버에 의한 오류)
//콜백(Callback함수) : 함수를 매개변수로 전달받고 요청에 대한 응답을 처리. 클라이언트 요청에 응답을 처리하는 역할 (콜백함수를 왜 쓰는지 알아야함 !)
//화살표 함수(Arrow function) : =>

//콜백 : 라미터로 전달받은 함수, 익명의 함수 사용, 화살표 함수..