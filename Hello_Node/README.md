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
4. views 폴더의 파일들을 \*.pug로 이름 변경
5. app.js 파일에서 jade를 pug로 변경

## pug view
1. 전통적인 html 코딩이 아닌, 새로운 문법구조로 만드는 view 파일
2. html과 달리 tag가 열리기만 하고 닫히는 tag가 없다.
3. 각 tag의 시작은 왼쪽 정렬로 정확히 구조가 일치하여야 한다.
4. tag에 tag를 포함할 때는 포함되는 tag의 앞에 tap키로 공백을 추가해주어야 한다.
5. pug는 nodeJS에 의해서 transfiler(파일 변환)가 되고, 실제로는 html 코드로 만들어져 client에 전송된다.
6. nodeJS에 설치한 pug 모듈에 의해서 파일이 변환된다.