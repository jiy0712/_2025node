// function 함수이름(매개변수)

function 함수(매개변수){
    console.log('함수' + 매개변수);
}
함수('매개변수');

// 실행할 땐 터니멀에 node 문법/function.js 쳐서 실행할 수 있다. (f5 후 node.js 선택해도 된다)

// 익명 함수 : 함수 이름이 없는 함수
익명함수 = function(매개변수){
    console.log('익명함수' + 매개변수);
}
익명함수('swag')

// function 대신 화살표 함수 ( => )
익명함수 = (매개변수) => {
    console.log('익명함수' + 매개변수);
}
익명함수('swag')

// 매개변수가 하나일 때 소괄호()를 제거해도 된다
익명함수 = 매개변수 => {
    console.log('익명함수' + 매개변수);
}
익명함수('swag')

// 함수 body가 한 줄이거나 return일 때
익명함수 = 매개변수 => console.log('익명함수' + 매개변수);
익명함수('swag')