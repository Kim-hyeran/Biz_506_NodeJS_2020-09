# NodeJS + mongoDB + mongoose 연동 BBS 프로젝트
 * mongoDB를 사용하여 BBS 프로젝트 수행

## mongoDB : NoSQL
 * NoSQL : Not Only SQL, SQL 뿐만 아니라 SQL을 사용하지 않는 방법으로 대량의 데이터에 CRUD를 수행하는 데 사용하는 DBMS
    - Schema 자체가 없어도 되는 환경
    - Document라는 개념으로 JSON형태의 데이터를 관리
    - 대량의 데이터를 INSERT할 때 데이터 구조가 정해지지 않았어도 데이터 취급 가능
 * RDBMS : 관계형 데이터베이스, 데이터를 INSERT하기 전에 반드시 DB, TableSpace, Table과 같은 Schema들을 먼저 생성해야 한다.
    - 만약 원래 구성된 Schema와 다른 형식의 데이터를 저장하려면 데이터 구조를 먼저 변경해야하기 때문에 유연한 애처가 어렵다.
 * BigData : 굉장히 큰 데이터, 혹은 대량의 데이터, 취급이 쉽지 않은 형태의 데이터
    - 취급이 쉽지 않다 : RDBMS로 관리하기 어려울 만큼 매우 많은 데이터가 실시간으로 생성되는 경우
    - 빅데이터 취급 시 RDBMS보다는 NoSQL 형태의 DBMS를 많이 사용
    - mongoDB(windows), 하둡(Hadoop)을 많이 사용한다.

## NodeJS에서 mongoDB를 연동할 때는 Native 방식보다는 Schema를 임의로 생성하여 취급
 * mongoose : mongoDB의 Schema를 만들어 쉽게 연동할 수 있도록 도와주는 도구
 * mongoose를 사용하여 monogoDB를 마치 RDBMS처럼 취급하여 NodeJS와 연동