#  SMO 디렉토리 구성

[TOC]

## Frontend

- build
  - ...
  - ...
- config
  - dev.env.js
  - index.js
  - prod.env.js
- dist
- code_modules
- src
  - assets
  - components
    - Register
      - RegisterEmail.vue
      - RegisterEmailCheck.vue
  - router
    - index.js
  - service
    - loginService.js
  - App.vue
  - main.js
- static
- ...
- package-lock.json
- package.json
- README.md

현재 구성은 위와 같습니다. 전체적인 디렉토리 구성에 대해 먼저 설명하겠습니다. 설명하는 순서는 디렉토리 기준 위 -> 아래이고, 아직 이해하지 못했거나 필요없다고 생각하는 파일 및 디렉토리는 생략했습니다.

### config/index.js

 프론트엔드 전체적인 설정이 담긴 파일입니다.  포트는 8080을 쓰고,  build할 경우, backend/public 안에 들어간다는 등 전체적인 설정이 담겨있습니다.

 제가 건드린 부분은 아래 두 가지입니다.

- build 할 때 backend 쪽에 파일 생성하도록 하는 부분
- REST API를 사용할 경우, 3000번 포트로 연결할 수 있게 설정하는 부분

### src/components/

 view를 책임지는 부분입니다. 컴포넌트 디렉토리를 어떻게 구성해야 할지는 아직 자세하게 생각해보지 않아, 일단은 그대로 두었습니다.

### src/router/index.js

 path를 정의하는 부분입니다.  
 path 정의 시 주의할 점이 있습니다. rest 통신을 위해 /api라는 경로는 쓰면 안됩니다. '/api'를 사용할 경우 자동으로 3000번 포트를 호출하기 때문에 의도한대로 페이지가 나오지 않을 수 있습니다.

### src/service/

 프론트에서 기능을 구현하는 부분입니다. 

### 실행방법

test/frontend/ 위에서

``` shell
npm install
npm run dev
```

## Backend

- bin
  - www.js
- config
  - Mongo.json
- models
  - user.js
- node_modules
- public
- routes
  - index.js
  - users.js
- views
- app.js
- package-lock.json
- package.json



### bin/www.js

 app.js와 더불어 백엔드의 전체적인 설정을 다루는 부분입니다. 3000번 포트를 사용한다는 것을 정의해놓은 코드가 이곳에 있습니다.

### config/Mongo.json

 임시로 길성 노트북 ip에 있는 몽고DB를 사용하고 있습니다. 로컬에서 사용하고 싶은 분은 ip주소 대신  "mongodb://localhost:port/[DB_name]"  와 같은 형식으로 사용하면 됩니다.

### models/user.js

 이 디렉토리는 DTO(또는 VO) 디렉토리라고 생각하면 편합니다. 자세하게 어떻게 사용하는지는 아직 모르지만 일단 user는 추가해놓았습니다. 

### routes

 REST API를 받을 때 어떻게 할 것인지를 정의하는 부분입니다. index.js에는 예시로 " GET /api/hi "를 받을 경우 "hahahahah"를 보낸다는 코드가 있습니다.

### app.js

 전반적인 설정을 다루는 부분입니다. 주된 설정은 다음과 같습니다.

- express를 사용하여 백엔드 서버를 만든다.
- MongoDB와 연동한다.
- error 핸들링 한다.

### 실행방법

test/backend/ 위에서

``` shell
npm install
npm start
```

