import express from 'express';
const PORT = 4000;
const app = express();

// 적어도 express application이 만들어진 다음에 진행해야 한다
// application request에 어떻게 응답할지 설정해야 한다
// request: 유저가 뭔가를 요청하거나 보내거나 무슨 action을 하는것
// 여기서는 브라우저가 URL을 가져다달라고 하는것
// 브라우저 주소창에 localhost:4000을 입력하면 브라우저가 홈페이지에게 GET메서드로 request하는 것이다
const handleHome = () => {
    console.log('Somebody is trying yo go home.');
    // 서버에서만 console.log만 하고 브라우저에게 따로 처리해주는것은 없기 때문에 브라우저는 계속 기다리게 된다
};
app.get('/', handleHome); // 만약 내 application의 '/'에 get request를 한다면 함수실행


// 외부접속 listen
const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);
// nodemon이 있어서 파일을 새로 저장할때마다 서버가 새로 시작된다

// 브라우저가 http request를 만들어준다
// http는 브라우저가 서버에 접속하고 서버와 서버가 서로 통신하는 방법이다
// 브라우저가 나 대신 웹사이트를 서버에 request하고 페이지를 가져다준다