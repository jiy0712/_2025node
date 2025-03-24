const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
// __dirname : 현재 파일이 속한 절대경로
// path.join을 사용하면 운영체제에 맞추어 경로 구분자(/, \)를 알아서 정해준다
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/travel', (req, res) => {
    res.render('travel', {travelList});
});
// console.log(path.join(__dirname, 'views'));