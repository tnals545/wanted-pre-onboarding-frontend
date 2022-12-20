# 원티드 프리온보딩 프론트엔드 - 선발 과제

<br>
<br>

<p align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/92634711/206902844-d8615190-2350-4b74-8399-df5c4cb80eb4.PNG" />
</p>

<br>
<br>

## 개요

<br>

해당 Repository는 원티드 프리온보딩 프론트엔드 인턴십 과정에 지원하기 위한 선발 과제 제출을 위해 작성되었습니다.

<br>

- 소개 : React를 기반으로 한 Todo 작성 웹페이지
- 기간 : 2022.12.05 ~ 2022.12.10
- 구현 기능
  - 로그인/로그아웃 및 회원가입 기능
  - Todo 추가, 삭제, 수정 기능

<br><br>

## 프로젝트 구조

<br>

```tex
src
 ┣ components
 ┃ ┣ todo
 ┃ ┃ ┣ TodoInsert.jsx
 ┃ ┃ ┣ TodoItem.jsx
 ┃ ┃ ┗ TodoList.jsx
 ┃ ┣ api.jsx
 ┃ ┣ NavBar.jsx
 ┃ ┗ Title.jsx
 ┣ pages
 ┃ ┣ LogIn.jsx
 ┃ ┣ SginUp.jsx
 ┃ ┗ Todo.jsx
 ┣ styles
 ┃ ┣ Button.js
 ┃ ┣ Container.js
 ┃ ┣ Div.js
 ┃ ┣ GlobalStyles.js
 ┃ ┣ Input.js
 ┃ ┣ Li.js
 ┃ ┗ Span.js
 ┣ App.jsx
 ┣ index.js
 ┗ Router.js
```

<br>
<br>

## 라이브러리

### install

```javascript
$ npm i react-router-dom
$ npm i react-icons
$ npm i axios
$ npm i styled-components styled-reset
```

<br>

### version

- axios : "^1.2.0"
- react : "^18.2.0"
- react-dom : "^18.2.0"
- react-icons : "^4.7.1"
- react-router-dom : "^6.4.4"
- styled-components : "^5.3.6"
- styled-reset : "^4.4.3"

<br>
<br>

## 프로젝트 실행 방법

### 1. 프로젝트 clone

원하는 경로에 프로젝트를 복사합니다. 저는 테스트를 위해 test-folder 명으로 되어있는 폴더에 복사했습니다.

<img width="80%" src="https://user-images.githubusercontent.com/92634711/206902020-24fe6469-8ed6-454f-9a81-0965f0f5c96e.PNG" />

```javascript
$ git clone https://github.com/tnals545/wanted-pre-onboarding-frontend.git
```

<br>

### 2. install react-scripts

프로젝트 복사가 완료되면 해당 폴더로 이동 후 react-scripts를 install 합니다.

```javascript
// wanted-pre-onboarding-frontend 폴더로 경로 변경
$ cd wanted-pre-onboarding-frontend/

// react-scripts 설치
$ npm install react-scripts
```

<br>

### 3. npm start

마지막으로 터미널창에 npm start를 입력하면 로컬환경에서 프로젝트 실행이 가능합니다.

```javascript
// 프로젝트 실행
$ npm start
```

<br><br>

## 데모 이미지 및 배포 (Netlify)

<br>

[https://sum-todo.netlify.app](https://sum-todo.netlify.app/)

<br>
<br>

### 1. 로그인

<br>

<img width="30%" src="https://user-images.githubusercontent.com/92634711/206903797-e0bb1270-4dba-43e1-8572-c8352ce7748d.PNG" />

<br>

### 2. 회원가입

<br>

<img width="30%" src="https://user-images.githubusercontent.com/92634711/206903817-28296f38-59ae-4037-a9e3-8e122bae2367.PNG" />

<br>

### 3-0. Todo ( 내용 X )

<br>

<img width="80%" src="https://user-images.githubusercontent.com/92634711/206903842-daef86e5-a718-4352-9787-ee921db35a09.PNG" />

<br>

### 3-1. Todo ( 내용 O )

<br>

<img width="80%" src="https://user-images.githubusercontent.com/92634711/206903946-54acd450-f73f-44b5-aee2-6edea12df0d2.PNG" />

<br>

### 3-2. Todo ( 내용 수정 )

<br>

<img width="80%" src="https://user-images.githubusercontent.com/92634711/206903957-c5f0eece-329e-475d-a2db-53b9e18e8d62.PNG" />

<br><br>

## 회고

<br>

### 다음과 같이 프로젝트를 구현한 이유

<br>

**1. 프로젝트 구조**

- Router.js

  create react app로 새로운 앱을 만들면 기본값으로 아래와 같이 index.js에서 경로를 관리하게 됩니다.

  ```javascript
  // src/index.js

  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";

  ReactDOM.render(<App />, document.getElementById("root"));
  ```

  <br>

  저는 이렇게 기본값으로 되어있는 구조보다는 클라이언트 라우팅만을 담당하는 별도 컴포넌트를 만들어서 관리하고 싶었습니다.

  그러는 편이 관리하기 편하고 해당 파일이 어떤 역할을 하는지 파악하기도 쉽다고 판단하여 다음과 같이 `Router` 컴포넌트를 따로 만들었습니다.

  ```javascript
  // src/Router.js

  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import App from "App";
  import GlobalStyles from "styles/GlobalStyles";
  import SignUp from "pages/SginUp";
  import Todo from "pages/Todo";

  const Router = () => {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default Router;
  ```

  ```javascript
  // src/index.js
  import React from "react";
  import ReactDOM from "react-dom/client";
  import Router from "Router";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Router />);
  ```

  <br>

- components, pages, styles 폴더

  위에서 보여준 프로젝트 구조를 간략하게 다시 보여드리면

  ```tex
  src
   ┣ components
   ┃ ┗ ...
   ┣ pages
   ┃ ┗ ...
   ┣ styles
   ┃ ┗ ...
   ┣ App.jsx
   ┣ index.js
   ┗ Router.js
  ```

  src 폴더에서 크게 components, pages, styles 3가지 폴더로 나눴습니다.

  위처럼 나눈 의도는 다음과 같습니다.

  components : 페이지에서 사용되지만 메인 기능은 아닌 기능들을 컴포넌트화 하여 모아둔 폴더

  pages : 화면에 출력되는 페이지를 모아둔 폴더

  styles : css와 같은 웹페이지 디자인에 관련된 컴포넌트를 모아둔 폴더

  <br>

  ※ 부족한 부분

  글을 작성하면서 발견한 문제점인데, 앞에서 말한 의도로 폴더를 나누었지만 현재 작성된 코드를 보면 의도와는 맞지 않게 되어있는 것을 확인했습니다.

  제 의도와 맞게 작성된 코드와 그렇지 않은 코드를 보여드리면

  ```javascript
  // 의도에 맞게 작성된 코드
  // src/pages/Todo.jsx

  import NavBar from "components/NavBar";
  import TodoInsert from "components/todo/TodoInsert";
  import TodoList from "components/todo/TodoList";

  import { Container } from "styles/Container";
  import { Div } from "styles/Div";
  import { Span } from "styles/Span";

  const Todo = () => {
    return (
      <>
        <NavBar />
        <Container className="todo">
          <Div purpose="todo" className="todoTitle">
            <Span size="XXLarge" bold="thick">
              Todo List
            </Span>
          </Div>
          <TodoInsert />
          <TodoList />
        </Container>
      </>
    );
  };

  export default Todo;
  ```

  ```javascript
  // 의도와 맞지 않게 작성된 코드
  // src/pages/Login.jsx

  // ...

    return (
      <>
        <Div purpose="login" className="logo">
          <Span size="XXLarge" bold="thick">
            ToDo
          </Span>
        </Div>
        <form onSubmit={onSubmit} className="signinInput">
          <Div purpose="login" className="emailInput">
            <Span>이메일</Span>
            <Input
              type="email"
              onChange={onChnageInput}
              placeholder="이메일을 입력해주세요."
            />
          </Div>

          <Div purpose="login" className="passwordInput">
            <Span>비밀번호</Span>
            <Input
              type="password"
              onChange={onChnageInput}
              placeholder="비밀번호를 입력해주세요."
            />
          </Div>

          <Div purpose="login" className="errMessage">
            {isErr && (
              <Span size="medium" color="red" bgColor="bright">
                {message}
              </Span>
            )}
          </Div>

          <Div purpose="login" className="loginBtn">
            <Button
              type="submit"
              disabled={!(isValidEmail && isValidPassword)}
              color="bgMagenta"
              size="large"
              bold="thick"
            >
              로그인
            </Button>
          </Div>

          <Div purpose="login" className="signupSpan">
            <Span>
              아직 계정이 없으신가요?{" "}
              <Link to="/sign-up">
                <Span color="blue" bgColor="bright" bold="thick">
                  회원가입
                </Span>
              </Link>
            </Span>
          </Div>
        </form>
      </>
    );
  };

  export default LogIn;
  ```

  pages 폴더에 있는 Todo.jsx(위)와 Login.jsx(아래) 컴포넌트를 가져와 봤습니다. Login.jsx는 코드가 너무 길어서 return 위의 코드는 생략했습니다.

  두 컴포넌트의 return만 비교해 봐도 크게 다른 것을 알 수 있습니다.

  <br>

  앞서 말한대로 pages 폴더에 있는 컴포넌트의 역할은 웹페이지에 출력될 대표 컴포넌트라고 할 수 있습니다.

  Todo.jsx 컴포넌트는 의도한 대로 todo CRUD 기능들을 components 폴더에서 호출하여 사용하기 때문에 코드가 길지 않고 깔끔합니다. 제가 의도한 페이지 컴포넌트의 역할을 잘 구현했다고 느꼈습니다.

  그와 반대로 Login.jsx 컴포넌트는 전체 코드를 적어두지는 않았지만, 많은 기능들을 나누지 않고 한꺼번에 적어둔 컴포넌트라고 판단했습니다. 그것도 pages 폴더가 아닌 components 폴더에 더 적합한...😭 따라서 해당 프로젝트를 리팩토링 하게 된다면 컴포넌트를 세분화하여 기능 역할과 페이지 역할 컴포넌트로 나눠야 한다고 생각했습니다.

<br>

**2. 인증(Authentication)과 인가(Authorization)**

- 유효성 검사

  로그인과 회원가입 시 input으로 입력되는 값들은 정규표현식을 사용하여 유효성 검사를 했습니다. 이메일은 '@'를 포함한 약간의 추가적인 조건이 있고, 비밀번호는 8자리 이상만 되면 true인 정규표현식을 사용했습니다.

  ```javascript
  // 이메일 정규표현식
  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  // 비밀번호 정규표현식
  const passwordRegex = /.{8}/g;
  ```

  <br>

  ※ 부족한 부분

  이번 과제에서 사용된 정규표현식은 작성하는 방법을 몰라서 선발 과제 페이지에 나와있는 최소한의 조건에 맞는 정규표현식을 구글링을 통해 가져왔습니다. 따라서 제가 원하는 조건에 맞추기 위해서는 정규표현식에 대한 약간의 공부와 추가적인 구글링을 통해 효율적으로 사용해 보려고 합니다.

  <br>

- JWT (JSON Web Token)

  JWT는 선발 과제 페이지에 안내되어 있는 api를 사용하여 access_token을 응답받아 사용했습니다.

  ```javascript
  // src/components/api.jsx

  import axios from "axios";

  const BASE_URL = "https://pre-onboarding-selection-task.shop/";

  export const postSignUp = async (data) => {
    const { email, password } = data;

    return await axios({
      method: "post",
      url: `${BASE_URL}auth/signup`,
      headers: { "Content-Type": `application/json` },
      data: { email, password },
    });
  };

  // ...

  export const createTodo = async (todo) => {
    const ACCESS_TOKEN = localStorage.getItem("loginToken");

    return await axios({
      method: "post",
      url: `${BASE_URL}todos`,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": `application/json`,
      },
      data: { todo },
    });
  };

  // ...
  ```

  위와 같이 api.jsx 컴포넌트는 모든 api를 관리하기 위한 컴포넌트로 만들었습니다.

  로그인, 회원가입 뿐만 아니라 todo CRUD를 처리하는 api를 각각의 함수로 만들어서 export하여, 필요한 컴포넌트에서 import 후 사용하여 간편하게 response 값에 접근할 수 있도록 하는 것을 목적으로 만들었습니다.

  (이 부분에서는 다른 분들처럼 로그인, 회원가입 api 컴포넌트 / todo CRUD api 컴포넌트 -> 이렇게 2개의 컴포넌트로 나눠서 관리하는게 좋을 것 같습니다.)

  api 요청에 필요한 데이터는 매개변수(parameter)로 받아왔습니다.

  <br>

  기존에는 then과 catch 작업도 해당 컴포넌트에서 수행하려 했지만 그렇게 된다면 setState 함수를 매개변수로 받아와야 하는데, setState가 state(상태) 값을 변경하는 함수라는 것을 선언해줘야 하는 번거로움이 생겨 다른 방법으로 수정했습니다.

  <br>

  `async, await` : 해당 컴포넌트에 있는 함수들은 async, await을 사용하여 비동기적으로 동작하게 만들어 결과가 주어지는 동안 다른 작업이 가능하게 만들었습니다.

  <br>

  `BASE_URL` : 각각의 목적에 따라 요청하는 api 주소는 조금씩 다르지만 맨 앞의 주소는 모두 같습니다. 따라서 반복적으로 사용되는 주소만 변수로 만들어서 hard coding 요소를 줄였습니다.

<br>

**3. todo CRUD**

- Create

  ```javascript
  // src/components/todo/TodoInsert.jsx

  import { useRef, useState } from "react";
  import { createTodo } from "components/api";

  // ...

    const onSubmit = (e) => {
      e.preventDefault();

      // 입력한 text가 없을 경우 빈 텍스트가 create 되는 것을 방지
      if (!text) return;

      createTodo(text);

      setText("");
      textRef.current?.focus();
    };
    return (
      <Div purpose="todo" className="todoInsert">
        <form onSubmit={onSubmit}>
          <Input
            className="todoInsert"
            type="text"
            value={text}
            onChange={onChangeInput}
            ref={textRef}
          />
          <Button type="submit">
            <Span size="XLarge">✅</Span>
          </Button>
        </form>
      </Div>
    );
  };

  export default TodoInsert;
  ```

  함수로 만들어둔 api인 `createTodo()`를 `TodoInsert.jsx` 컴포넌트에 import 하여 페이지가 submit 된다면 input에 입력된 text를 api에 create 요청을 합니다.

  <br>

- Read

  ```javascript
  // src/components/todo/TodoList.jsx

  import { useEffect, useState } from "react";

  import TodoItem from "components/todo/TodoItem";
  import { getTodo } from "components/api";

  import { Div } from "styles/Div";

  const TodoList = () => {
    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
      getTodo()
        .then((res) => setTodoData(res.data))
        .catch((err) => console.error("getTodo:", err));
    }, [todoData]);

    return (
      <Div purpose="todo" className="todoList">
        <ul className="TodoList">
          {todoData.map((todo) => (
            <TodoItem key={todo.id} todoObj={todo} />
          ))}
        </ul>
      </Div>
    );
  };

  export default TodoList;
  ```

  `getTodo()`를 `TodoList.jsx` 컴포넌트에 import 하여 `todoData` 값이 바뀔 때마다 페이지가 리렌더링 되도록 만들었습니다.

  <br>

  `map` : map 함수를 사용해서 배열로 되어있는 todoData 각각의 요소를 todo로 받아서 리스트로 출력하기 위해 `TodoItem.jsx` 컴포넌트의 props로 보내줍니다.

  <br>

- Update, Delete

  ```javascript
  // src/components/todo/TodoItem.jsx

  import { deleteTodo, updateTodo } from "components/api";

  // ...

  const TodoItem = ({ todoObj }) => {
    const { id, isCompleted, todo } = todoObj;

    const [isEditTodo, setIsEditTodo] = useState(false);
    const [text, setText] = useState("");

    const textRef = useRef();

  // ...

    const onSubmit = (e) => {
      e.preventDefault();

      if (!text) return;

      updateTodo({ id, isCompleted, todo: text });

      setIsEditTodo(false);
    };

    useEffect(() => {
      if (isEditTodo) {
        setText(todo);
        textRef.current?.focus();
      }
    }, [isEditTodo, todo]);

  // ...
  ```

  Update는 입력했던 input 데이터를 수정해야 하기 때문에 `useEffect` hook을 사용하여 의존성 배열에 `isEditTodo `와 `todo` 를 추가했습니다.

  `isEditTodo` : 수정 여부를 판단하기 위해 만든 state ( 값이 true라면 기존에 입력했던 todo 텍스트를 받아옵니다. )

  `textRef.current?.focus()` : 수정 버튼을 클릭 시 input에 바로 입력할 수 있도록 해주는 함수

  <br>

  ```javascript
  // src/components/todo/TodoItem.jsx

  import { deleteTodo, updateTodo } from "components/api";

  // ...

  <Button className="iconBtn" onClick={() => deleteTodo({ id })}>
    <FaRegTrashAlt size="20" color="#58385c" />
  </Button>;

  // ...
  ```

  Delete는 todo의 id값만 있으면 삭제가 가능하기 때문에 간단하게 구현했습니다.

  만들어둔 `deleteTodo` api 요청 함수를 import 하여 쓰레기통 아이콘 클릭 시 바로 삭제되도록 구현했습니다.

<br><br>
