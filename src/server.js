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
        return res.send('<h1>Not Allowed</h1>'); // 반환하는순간 연결종료
    }
    console.log('Allow, you may pass.')
    next();
}

const handleHome = (req, res) => {
    console.log(`I'm finalware`)
    return res.send('<h1>I still love you.</h1>');
};

// finalware이기 때문에 next인자나 함수호출 필요없음
const handleProtected = (req, res) => {
    return res.send('Welcome to the private lounge.')
}

// app.use();은 global middleware를 만들 수 있게 한다
// 즉, 어느 URL에서도 작동된다
// app.get()에서 middleware를 활용하기 전에 app.use()로 global middleware를 만들어야 한다(순서)
// 자바스크립트는 위에서 아래방향으로 순서대로 처리하기 때문에 순서가 중요하다
// 어느 path에 가던 gossipMiddleware() controller는 실행된다
// 미들웨어 설치!: global하게 미들웨어를 둘 수도 있지만, 한 path에서만 작동되는 middleware을 만들 수도 잇음
app.use(logger);
app.use(privateMiddleware);
app.get('/', handleHome);
app.get('/protected', handleProtected);
const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);
