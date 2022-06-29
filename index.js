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

const express = require('express');
const app = express(); // 애플리케이션 만듬

// babel 설명
// nodeJS는 우리가 작성한 자바스크립트를 이해하겠지만 최신 자바스크립트 코드는 nodeJS가 이해하지 못한다
// 이렇게 모던자바스크립트코드를 nodeJS가 이해할 수 있도록 변환시켜주는것이 babel이다
// 그래서 nodeJS가 모던자바스크립트코드를 이해할지 걱정안하고 코드를 작성할 수 있다

//2.3이어서