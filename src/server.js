import express from 'express';
const PORT = 4000;
const app = express(); // express application을 생성해준다

// 서버(=여기서 말하는 애플리케이션)은 항상 켜저있는 컴퓨터같은것이다
// 서버는 항상 켜져있고 인터넷에 연결되어잇다
// 만약 google.com페이지로 가게 된다면 google.com에 request를 보낸 것이다
// 서버는 이러한 request를 listening하고 잇다
// 카카오톡에 메시지전달, 홈페이지 진입, 영상클릭, 재생누른다, 댓글을다는것 모두 서버에 request하는 것이다

// port 및 서버가 시작할때 실행할 함수 지정
const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);