import express from 'express'; // node_modules/express/index.js 라고 안해도 된다
const PORT = 4000; // 창문을 연다
const app = express(); // express application을 바로 사용할 수 있게 return해준다

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
app.listen(PORT, handleListening); // 우리서버가 request를 listen하고 있는데  console.log만 하고 반응이 없는거다 

/*
서버와 routes가 어떻게 만들어지는가: express를 통해 서버(application)를 만든다

서버는 항상 켜져있고 인터넷과 연결되어있으면서 request를 listening하는 컴퓨터이다
request는 우리가 서버에게 요청하는것이다
만약, 노마드코더 홈페이지에 접속을 하려고 하면 브라우저가 서버에게 GET메서드로 request를 보내는 것이다
댓글을 달때도 request 즉, 브라우저를 통해 상호작용을 하려고 하면 모두 request이다
즉, 사용자는 브라우저를 통해 request를 한다
내 행동을 listen하는 서버에게 request할 수 잇다

어떤 경우에는 서버가 공개되어있지 않기 때문에 특정한 request에서만 listen되는경우도 있다
이 경우 해당 서버는 port 4000에서만 request를 listen 할 수 있다
port는 컴퓨터의 창문이나 문같은거기 때문에 port는 있어야된다
컴퓨터에는 많은 port가 있는데 다수가 개발되어있고 많은 프로그램들이 안에서 소통하고 있다
내가 request한다면 해당 port로 요청하는것이다
어떤 port는 어떤 프로그램을 실행할 확률이 있는데 숫자가 높을수록 비어있을 확률이 높다

server.js파일을 실행시켜도 서버나 콘솔은 죽지않고 유지된다
서버를 종료하고 다시 시작해도 죽지 않고, 서버를 종료하기 전까지 listening하기 시작하면 계속 listen한다

브라우저주소창에 URL을 입력하면 해당서버에게 request를 하게 된다
서버가 건물이라고 생각했을때 /path는 건물에 들어갈 문이라 생각하자
이러한 문들을 routes라고 한다

서버에게 유저가 홈페이지에 가려고 하면 어떻게 해야할지 알려줘야하는데 http method
브라우저는 아무데도 안가고, 내 서버를 호출하면 서버가 브라우저에게 rewponse를 전달해준다
브라우저는 이러한 response를 보여준다
브라우저가 / path에서 GET메서드로 request를 보내면 서버에선 app.get('/', middleware); 함수를 실행한다
*/