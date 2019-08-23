# DB

> SMO 프로젝트 데이터모델링 



## 회원정보

### 회원가입 정보 

`Key: user_id `

| key             | type    | value            |      |
| --------------- | ------- | ---------------- | ---- |
| user_id         | string  | 유니크키         |      |
| name            | string  | 이름             |      |
| phone           | string  | 전화번호         |      |
| email           | string  | 이메일           |      |
| address         | string  | 주소             |      |
| password        | string  | 비밀번호         |      |
| interest        | string  | 관심분야         |      |
| profileImageSrc | string  | 프로필이미지     |      |
| profileContent  | string  | 자기소개         |      |
| emailVerified   | boolean | 이메일 인증 여부 |      |

> 1. 유니크키는 int여야 하는게 아닌지? string으로 하는 이유는? 
> 2. interest를 회원 가입할 때 받을 예정? 
> 3. 프로필 이미지는 default로 넣어두고 수정할 수 있게 해야함
> 4. 자기소개 내용 profileContent로 수정
> 5. UUID 리스트? => myStudy와 pickStudy는 유니크키 모음이라는 설명? 



### 회원의 스터디 정보 

`Key:user_id` `Key:study_id`

| key       | type                  | value              |      |
| --------- | --------------------- | ------------------ | ---- |
| myStudy   | [string, string, ...] | 참가한 스터디 목록 |      |
| pickStudy | [string, string, ...] | 찜한 스터디 목록   |      |



## 스터디 

### 스터디 정보 

`Key: study_id`

| key        | type                   | value       |      |
| ---------- | ---------------------- | ----------- | ---- |
| study_id   | string                 | 유니크키    |      |
| title      | string                 | 제목        |      |
| category   | string                 | 카테고리    |      |
| tag        | string                 | 태그        |      |
| difficulty | int                    | 난이도      |      |
| isOffline  | boolean                | 온/오프라인 |      |
| location   | string                 | 지역        |      |
| subject    | string                 | 주제        |      |
| contents   | string                 | 내용        |      |
| startDate  | string                 | 시작일      |      |
| endDate    | string                 | 종료일      |      |
| host       | string                 | 마스터      |      |
| member     | [string, string , ...] | 참가자      |      |
| evnetList  | []                     | *아래참고   |      |

> 1. 카테고리와 태그가 있는데 주제는 왜 필요한지? 
>
> 2. 시작일과 종료일 date type이 아닌 string? 
>
> 3. 스터디 정보에 이미지 넣을 필요가 있는지는 논의해봐야 할 문제인 것 같음
>
>    => 카테고리별로 이미지를 선택할 수 있게 해주는 것 정도? 
>
>    => 커스터마이즈 할 수 있게 해야할지?  
>
> 4. host와 member에 user_id가 들어가지 않을지? 



### 스터디 진행 상세 내용 

`key: study_id`  `key: event_id`

eventList []

| key        | type   | value    |      |
| ---------- | ------ | -------- | ---- |
| event_id   | string | 유니크키 |      |
| title      | string | 제목     |      |
| contents   | string | 내용     |      |
| start_time | string | 시작일   |      |
| end_time   | string | 종료일   |      |
| username   | string | 작성자   |      |

> 1. username은 user_id로 연결해서 name 불러올 수 없는지? RDBMs 아니여서 client 단에서 직접 넣어줘야 하는 건가요? ㅠ 



`Key: study_id`

| key      | type | value                      |      |
| -------- | ---- | -------------------------- | ---- |
| subGoals | []   | 중간목표                   |      |
| board    | []   | 게시판                     |      |
| state    | s    | 진행상태(모집, 진행, 종료) |      |
| likeUser | []   | 좋아요 유저                |      |
| pickUser | []   | 찜 유저                    |      |

> 1. state는 int로 해도 되지 않을까? 장단점?
> 2. 좋아요와 찜의 기능을 합치는게 좋을 것 같음 



### 분야별 Top10 

`Key: categoryName` ??? 

| key          | type   | value       |      |
| ------------ | ------ | ----------- | ---- |
| categoryName | string | 유니크키    |      |
| UUIDList     | []     | 탑10 리스트 |      |



> 카테고리별로 study 묶음이 따로 있어야 할 것 같음...
>
> 그 안에서 likeUser값이나 pickUser 값이 높은 순서대로 뽑아내야 함 
>
> 잘 이해가 안가요 ... 



### 게시판

`Key: board_id`

| key      | type   | value           |      |
| -------- | ------ | --------------- | ---- |
| board_id | string | 유니크키        |      |
| subtitle | string | 태그(공지/자유) |      |
| posts    | []     | *게시글         |      |

> 1. board_id가 왜 존재하는지 잘 모르겠음...
> 2. subtitle 는 공지인지 아닌지 정도만 정할 수 있게 해주면 될 듯. 포스트에 대한 성질을 직접 정해줄 것인지 아니면 자유롭게 태그를 달아서 검색할 수 있게 도와줄지 정하는 것이 좋을 듯 

`Key: Study_id` `Key: board_id`  `Key: post_id` 

| Key          | type   | value    |      |
| ------------ | ------ | -------- | ---- |
| post_id      | string | 유니크키 |      |
| title        | string | 제목     |      |
| username     | string | 작성자   |      |
| create_at    | string | 작성시간 |      |
| contents     | string | 내용     |      |
| attachedFile | []     | 첨부파일 |      |
| comments     | []     | *댓글    |      |



### 게시글 댓글 

`Key: Study_id` `Key: board_id`   `Key: post_id` `Key: comments_id` 

| key         | type   | value    |      |
| ----------- | ------ | -------- | ---- |
| comments_id |        | 유니크키 |      |
| username    | string | 이름     |      |
| contents    | string | 내용     |      |
| create_at   | string | 작성시간 |      |



