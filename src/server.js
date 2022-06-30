import express from 'express';
const PORT = 4000;
const app = express();

// '/' path로 GET요청을 하면 express는 handler인 handleHome()함수에게 두개의 object를 전달한다
// request는 어떻게 요청했는지에 대한 정보를 알 수 있다
// response
const handleHome = (request, response) => {
    // response를 return한다
    // return response.end(); // request 종료시킴
    return response.send('I still love you'); // 메시지전달
};
const handleLogin = (res, req) => {
    return req.send('Login Here!')
}
app.get('/', handleHome);
app.get('/login', handleLogin);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

// handler에는 event가 있다
// button.addEventListener('click', event => console.log(event.target.value))
// express에선 route handler에는 event가 없지만 2개의 object가 있다
