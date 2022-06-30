import express from 'express';
const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
    console.log(`Someone is going to: ${req.url} by: ${req.method}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === '/protected') {
        return res.send('<h1>Not Allowed</h1>');
    }
    console.log('Allow, you may pass.')
    next();
}

const handleHome = (req, res) => {
    console.log(`I'm finalware`)
    return res.send('<h1>I still love you.</h1>');
};

const handleProtected = (req, res) => {
    return res.send('Welcome to the private lounge.')
}

app.use(logger);
app.use(privateMiddleware);
app.get('/', handleHome);
app.get('/protected', handleProtected);
const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
브라우저가 request를 보내면 서버는 브라우저에게 response를 전달해줘야 한다
이렇게 response를 해주기 위해 controller를 활용하면 되는데, controller에는 request, response, next argument가 있다
request object에는 cookies, 브라우저정보, IP주소 등의 request와 같은 정보가 있다
express API를 살펴보면 request에서 얻을 수 정보나 response할 메서드의 종류를 확인할 수 있다
return res.end(); 서버와의 연결종료
return res.send('Hello'); 브라우저에게 메시지 전달(종류는 상관없음)

이러한 모든것들이 route를 만들고, 그 route를 다루는것에 기초하고있다
routes를 만들고 controller를 만든다
controller에서는 DB와 소통하고 비밀번호를 확인하고 동영상을 전송하는 등등의 작업을 하면 된다

controller자리에 함수를 넣어주지 않으면 Error를 받는다
console.log('Hello')는 바로 실행해버리기 때문에 함수가 아니라 statement이다

controller는 인라인으로 작성하는것보단 함수를 따로 만들어서 사용하는게 더 좋다
*/