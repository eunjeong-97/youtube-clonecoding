import express from 'express';
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send('<h1>I still love you.</h1>');
};
const handleLogin = (req, res) => {
    return res.send({ message: 'Login Here!' })
}
app.get('/', handleHome);
app.get('/login', handleLogin);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

// 공식문서를 보면 application 많은 속성이 있으니 필요할때마다 찾아보자
// request object는 파일을 포함하거나, search query, username, password를 포함하는 경우도 있다
// request에서 이러한데이터를 받아서 가공해야 한다