import express from 'express';
const PORT = 4000;
const app = express();

const home = (req, res) => {
    return res.send('<h1>home</h1>');
};

const login = (req, res) => {
    return res.send('<h1>login</h1>')
}

app.get('/', home);
app.get('/login', login);

// 서버가 시작되면 제일 먼저 실행
const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);
