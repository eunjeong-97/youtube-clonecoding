/*
nodeJS
브라우저 바깥에서 작동되는 자바스크립트
브라우저를 가진 모든 컴퓨터에는 자바스크립트가 설치되어있기 때문에 별다른 패키지를 설치하지 않아도 된다
터미널에서 node 명령어를 입력하면 자바스크립트가 가능하다

npm
자바스크립트 언어를 위한 라이브러리 패키지
npm과 nodeJS를 같이 사용해야 한다
npm은 nodeJS와 상호작용을 할 수 있게 해준다: nodeJS패키지 다운가능 등등
여러 사람들이 만든 패키지들을 가져다 쓸수있게 해준다 (공유가능)
예: express 한달 7000만명이 다운받는 패키지

package.json에 기록된 dependencies에 따라 node_modules나 package-lock.json이 없어도 다시 설치할 수 있다
package-lock.json 나와 동일한 환경(버전)으로 설치할 수 있게 도와준다
*/

// const express = require('express'); // 구식자바스크립트 코드대신
import express from 'express'; // babel-node 덕분에 최신자바스크립트 코드를 사용이 가능하다
const app = express(); // 애플리케이션 생성

// babel 설명
// nodeJS는 우리가 작성한 자바스크립트를 이해하겠지만 최신 자바스크립트 코드는 nodeJS가 이해하지 못한다
// 이렇게 모던자바스크립트코드를 nodeJS가 이해할 수 있도록 변환시켜주는것이 babel이다
// 그래서 nodeJS가 모던자바스크립트코드를 이해할지 걱정안하고 코드를 작성할 수 있다

// nodeJS를 위한 babel을 설치해야 한다
// npm i --save-dev @babel/core
// devDependencies에 @babel/core가 생긴것을 확인할 수 있다
// 이런 구분은 어떤 패키지가 어떤 역할을 하는지 알려주기 위한 구분이라  @babel/core를 dependencies로 옮겨도 문제가 없다
// dependencies는 프로젝트를 실행하기 위해 필요한것: 자동차의 가솔린이나 전기
// devDependencies는 개발자에게만 필요한것: 자동차를운정하기 위해 니꼬에게 음악이 필요한것
// @babel/core은 모던자바스크립트 코드를 작성하기 위한 패키지이다
// npm i @babe/core을 하면 dependencies에 저장되겠지만 devDependencies로 이동시켜도 무관하다

// babel 설정을 위한 babel.config.json 파일생성 (touch명령어)
// preset은 babel을 위한 엄청 거대한 플러그인이다
// preset-env을 사용하면 최신자바스크립트코드를 사용할 수 있게 해주는 플러그인으로 가장유명하다 (홈페이지에서 하라는대로 하면 된다)

/*
홈페이지에 나온것처럼 아래와 같이 직접 babel을 사용하는대신
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
package.json에 babel로 컴파일하는 scripts를 만들것이다
*/

// package.json scripts
// "dev": "babel-node index.js" 혹은 "dev": "babel-node index" 이라고해도 된다
// 즉, babel-node가 어떤 파일을 컴파일할지 설정하는 script이다
// @babel/node 패키지를 설치했기 때문에 babel-node 명령어를 사용이 가능하다
// 따라서 npm run dev 명령어를 실행하면 node도 실행되지만 babel-node도 실행되서 최신문법코드를 동작시킬 수 있게 된다

// 하지만 문제는 내가 코드를 수정할 때마다 다시 npm run dev를 실행해야 한다
// 이러면 너무 귀찮기 때문에 nodemon을 사용하면 좋다
// nodemon: 우리가 만든 파일이 수정되는걸 감시해주는 패키지이다
// 파일이 수정되면 nodemon이 알아서 재시작을 해주기 때문에 수정할때마다 npm run dev 명령을 해줄 필요가 없어진다
// npm i nodemon --save-dev 명령어로 설치하면 됨
// package.json scripts에서 "dev": "nodemon --exec babel-node index.js" 으로 명령어 수정해줌
// nodemon이 babel-node index.js 명령어를 재시작해준다
// npm run dev를 하게 되면 콘솔종료가 되지 않아 다시 실행을 해주게 된다

