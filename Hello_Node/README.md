# Hello Node Project
## NodeJS를 사용하여 Web Application Server 생성
1. workspace/nodeJS 폴더 생성
2. nodeJS 폴더에서 express 프레임워크를 사용하여 프로젝트 생성
    - express Hello_Node
3. cd Hello_Node : 프로젝트 폴더로 이동
4. npm install : dependency download
    - package.json 파일에 설정된 dependency들을 download하여 node modules 폴더에 저장
5. 프로젝트 시작
    가. npm start : 기본 시작
    나. nodemon : 개발환경에서 파일이 변경(수정)되면 자동으로 서버를 재시작하는 tool 사용

## nodeJS의 view 설정
1. nodeJS의 탄생시점에서는 jade라는 view 사용
2. 2.x로 버전업이 되면서 이름이 pug로 변경되었다.
3. npm install pug : view단의 도구 설치
4. views 폴더의 파일들을 *.pug로 이름 변경
5. app.js 파일에서 jade를 pug로 변경