캠핑 관련 YouTube 콘텐츠를 위한 웹사이트 개발을 위해 Node.js와 React를 활용하는 프로젝트의 간결한 가이드입니다:

<img src="https://github.com/123dd654/travelrank/assets/161431124/b69c0e63-1900-4a9d-b80f-29edc466d848" alt="메인화면">

## 개발 준비
* Node.js 설치: 공식 웹사이트에서 다운로드 후, node -v로 버전 확인.
* react 설치
* 라이브러리 설치
* 폴더 셋팅 : 필요없는 파일 제거
* 

## 실행하기
* 실행 : npm start

## 필수 라이브러리 설치
* React: npm create-react-app . (현재 디렉토리 사용)
* React Router DOM: npm install react-router-dom (페이지 라우팅 관리)
* Axios: npm install axios (API 호출)
* React Icons: npm install react-icons (아이콘 사용)
* React Player: npm install react-player (YouTube 비디오 재생)
* SASS: npm install sass (스타일링)
* React Helmet Async: npm install react-helmet-async (SEO 최적화)
* Swiper: npm install swiper (이미지 슬라이더)

## 필요한 라이브러리 설치
- react를 설치 `npx create-react-app 폴더이름` : 폴더를 생략하고 싶으면 .으로 표시
- react-router-dom 설치 `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리 -> package.json에서 버전 확인 가능
- axios 설치 `npm install axios` : API 라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘 설치
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass`
- react-helmet-async 설치

````bash
npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper
````

## 개발 스택
Node.js
React


## 트러블슈팅
Node.js 설치 문제: 설치 폴더 인식 오류 시, 필요한 파일을 직접 추가.

## 개발 도구
자동완성: rafce 스니펫 사용.
프로젝트 빌드: npm run build로 애플리케이션 빌드 및 최적화.

## 버전 관리 및 배포
git add .
git commit -m "변경사항 설명"
git push -u origin main

이렇게 간결하게 프로젝트 설정 및 관리 방법을 정리할 수 있습니다.
