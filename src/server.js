import express from 'express';
const PORT = 4000;
const app = express();

const gossipMiddleware = (req, res, next) => {
    // request에 응답을 하려면 return을 해야하는데 
    //return을 하게 되면 next()를 통해 다음 함수를 호출할 수 없기 때문에
    // middleware는 request에 응답하지 않는다 단지 request를 지속시켜줄 뿐이다
    // 여기서의 middleware는 유저가 우리 웹사이트의 어디를 가려는지 알려줄 것이다
    console.log(`I'm middleware`);

    // request object연습
    console.log(`Someone is going to: ${req.url}`);
    next();
}

const handleHome = (req, res) => {
    console.log(`I'm finalware`)
    return res.send('<h1>I still love you.</h1>');
};
const handleLogin = (req, res) => {
    return res.send({ message: 'Login Here!' })
};
// get()메서드는 여러개의 controller를 가질 수있다
// 그중 gossipMiddleware()는 middleware, handleware()함수는 finalware이다
// 해당 middleware는 / URL에만 적용되어있는데 여러 path에서 사용하면 더 좋을것같다
app.get('/', gossipMiddleware, handleHome);
// express가 처음에는 gossipMiddleware()함수를 호출하는데
// gossipMiddleware() 함수 내부에 있는 next()를 보고, 다음 한수인 handleHome()함수를 호출한다
// 그래서 어떤거든 middleware가 될 수 있지만, 이 경우 handleHome()함수는 return하는것이 있기 때문에 맨 마지막으로 실행될 것이고 (=다음함수를 호출할 수 없음) 따라서 finalware이다
// 모든 controller는 middleware가 될 수 있다
// next함수가 있다면 middleware로 쓰이는걸 알 수 있다
app.get('/login', handleLogin);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

// middleware: 중간에 잇는 소프트웨어
// 브라우저가 뭔가 request하고 서버가 다시 response하는 사이에 존재
// 따라서 handleHome, handleLogin함수는 middleware이고, handler가 아니라 controller이다
// 이러한 controller에는 request, response, next라는 argument가 있다
// next는 다음 함수를 호출한다: next()함수를 호출하면, express가 handleHome의 다음의 함수를 호출한다