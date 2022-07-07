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
        // 이 함수가 브라우저에게 'hello'라고 response한다
        return res.send('<h1>Not Allowed</h1>');
    }
    console.log('Allow, you may pass.')
    next();
}

const handleHome = (req, res) => {
    console.log(`I'm finalware`)
    console.log(req.path);
    return res.send('<h1>I still love you.</h1>');
};

const handleProtected = (req, res) => {
    return res.send('Welcome to the private lounge.')
}

const afterHome = (req, res, next) => {
    console.log('afterHome');
    next();
}

// global middleware
app.use(logger);
app.use(privateMiddleware);
// app.use(logger, privateMiddleware); 두줄로 입력한것과 동일하다
app.get('/', handleHome); // 만약 /가 아니라면 아래줄로 이동
app.use(afterHome); // afterHome middleware가  protected에만 적용되고 /에는 적용되지 않는다
app.get('/protected', handleProtected);
// 다른경로로 가면 페이지를 찾을수없기 때문에 연결이 종료된다
const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
middleware는 request와 response 중간에 있는 software이다
모든 controller는 middleware이다
next()함수를 호출하면 express가 브라우저에게 응답할때까지 다음 함수(controller)를 호출한다 
*/