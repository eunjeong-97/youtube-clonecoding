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
package.json: node에 관한 정보를 저장하는 파일이다

scripts
별명을 저장하고 npm run (script name) 명령어를 입력하면 실행가능
어떤 경우에는 scriptrs를 순서대로 호출할 수도 있다 (나중에)

dependencies는 프로젝트가 돌아가기 위해 필요한 package들 모아둠
express에 대한 정보는 패키지를 설치하면서 자동으로 저장됨(버전)
이러한 패키지들은 node_modules폴더에 저장되기 때문에 node_modules폴더를 전달할 필요가 없다
이렇게 node_modules를 업로드 하지 않기 위해 .gitignore에 node_modules/ 추가
package.json파일만 잇으면 다시 node_modules폴더에 패키지 설치가능

dependencies vs devDependencies: 체계화하기 위해 나눔
dependencies: 프로젝트가 실행되기 위해 꼭 필요한 패키지
devDependencies: 프로젝트가 실행될때 무조건 필요한건 아니지만 개발자가 개발을 할 때 필요한것, 개발환경을 더 편하게

babel: 모던자바스크립트코드를 이해하지 못하는경우도 있는데
그때문에 node로 실행하는것이 아니라 babel-node로 프로젝트를 실행한다
이러한 컴파일과정을 위한 설정은 babel.config.json에서 우리가 babel에 추가하고 싶은 plugin을 넣으면 되는데, react.js를 사용하면 react.js preset을 사용할 수 있다

파일이 변경될때마다 서버를 재시작해주는 nodemon
*/