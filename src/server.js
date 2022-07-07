import express from 'express';
import morgan from 'morgan';

import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const PORT = 4000;
const app = express();
const logger = morgan('dev');
app.use(logger);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
효율적으로 관리하기 위해 routes폴더와 controllers폴더를 만들었는데
server.js에서나 router파일에서 app.use()를 할때 다른파일에서 import해서 사용하는데
이렇게 import하기 위해서는 해당파일에서 먼저 export를 해야한다

단순히 const로 정의한것만으로는 공유가 되지 않기 때문에 
이 파일의 어떤걸 다른파일과 공유하고 싶다면 무엇을 공유하고 싶은지 지정해야 한다
해당 파일에서 공유하고 싶은게 하나라면 export default하면 되고 다른파일에서 import를 하면 공유할 대상 그대로 전해진다
이름은 상관없이 rename해도 됨: 어떻게 어떤이름으로 import하도 상관없음

한편, 각각의 const로 정의한거에 export를 하면 object를 열어야 하고, 정의한 이름 그대로 가져와서 사용해야 한다

글로벌라우터에서는 videoController와 userController에서 함수를 가져와서 사용한다
글러벌라우터를 사용하는 이유는 URL을 보기 좋게 하기 위해
*/