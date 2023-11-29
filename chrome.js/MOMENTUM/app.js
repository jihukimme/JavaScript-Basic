/* alert("hi");   Let's studying about JS */

/* document란? */
//document.h1 = "Hello, From JS"; //document는 웹사이트를 의미한다. 모든 것은 document에서 시작한다.

/* JS와 HTML 연결하기 */
/* HTML에서 id를 통해 element를 찾아주는 함수 getElementById를 사용하는 방법 */
//const h1 = document.getElementById("h1"); //인자로 문자열
//위의 경우 h1이란 id를 찾고있다. HTML에 정의된 id가 JavaScript에서 같으면 element를 가져오고 가져갈 수 있다.
//id는 사용하기 편리하지만, 보통 className을 사용하거나 둘 다 사용한다.

//console.dir(h1); //console.log보다 자세히 출력
//h1.innerText = "Got you";

/* 만약 h1이 없다면? -> className을 통해서 연결하는 방법 */
//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

/* h1만 가져오는 방법 */
//const h1 = documet.getElementsByTagName("h1");
//console.log(h1);

/* 노마드코더의 추천방법 */
//const h1 = documet.querySelector(".hello h1"); //element를 CSS방식으로 검색
//위의 querySelector은 조건에 맞는 element가 여러개여도 오직 첫번째 하나만 가져온다. (hello라는 class내의 h1태그)
//조건에 맞는 모든 element들을 가져오고자 한다면 querySelectorAll을 사용하면 된다.
//만약에 id를 통해서 찾고 싶다면, 인자에 #hello를 전달해주면 된다. #는 id를 나타내는 기호

//const h1 = document.querySelector("div.hello:first-child h1"); //element를 CSS방식으로 검색

//h1.innerText = "Hello";
//console.log(h1);

//console.dir(h1);  //element의 내부를 들여보고자할 때 사용

//h1.style.color = "blue"; //JavaScript에서 h1의 style을 변경할 수 있다.

/* JavaScript에서 할 대부분의 작업은 event를 listen하는 것이다.. */
// function handleh1Click() {
//   h1.style.color = "blue";
//   console.log("h1 was clicked!");
// }
// h1.addEventListener("click", handleh1Click); //event발생 시 실행할 function의 이름만 넣어준다. 괄호를 넣지 않는다. (바로 실행시키지 않는다.)
//위의 event를 다음과 같이 표현할 수도 있다. => h1.oneclick = handleh1Click;

/* listen하고 싶은 event를 찾는 가장 좋은 방법 */
//google에 찾고싶은 element의 이름 ex: h1일 경우, => h1 html element mdn검색 => Web APIs라는 문장이 포함된 페이지를 찾는다.(JavaScript관점의 HTML Heading Element)
//또는 console.dir를 통해서 element를 출력시켜 사용가능한 event를 볼 수 있다. (앞에'on'이 붙은 단어 ex: onchange)

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
//위의 evenet를 h1.onmouseleave = handleMouseLeave;로 나타낼 수도 있지만, 위의 방법을 선호한다. 왜냐하면, 후에 .removeEventListener를 통해서 event listener를 삭제할 수 있기 때문이다.

/* window객체를 통한 event만들기 */
// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// window.addEventListener("resize", handleWindowResize);

// function handleWindowCopy() {
//   alert("copier!");
// }
// window.addEventListener("copy", handleWindowCopy);

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }
// window.addEventListener("offline", handleWindowOffline);

// function handleWindowonline() {
//   alert("ALL GOOD");
// }
// window.addEventListener("online", handleWindowonline);

/* h1을 클릭할 때마다 색깔이 바뀌도록 하기 */
// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     // ==는 Equal Operator이고,  ===는 Strict Equal Operator이다.
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

/* HTML + JS + CSS 의 Dancing */
//JS는 HTML을 변경, CSS는 HTML을 보고있다. => 이를 활용해 h1 클릭할 때마다 색 변경하기.
// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }
// h1.addEventListener("click", handleTitleClick);

//또는 classList 활용 => 이전의 class 값을 갖고있어 활용할 수 있다.
// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// h1.addEventListener("click", handleTitleClick);

//toggle을 이용해 인자가 이미 있다면 제거하고, 없다면 추가해준다. 따라서 위의 코드는 toggle을 활용해 간단하게 나타낼 수 있다.
// function handleTitleClick() {
//   h1.classList.toggle("clicked");
// }
// h1.addEventListener("click", handleTitleClick);

/* 실습 시작*/
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
//위 내용은 HTML element를 가져오는 것이다.

function onLoginBtnClick() {
  // console.log(loginInput.value);
  //console.log("click!!");
  const username = loginInput.value;
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long");
  // }
  console.log("username");
  //HTML의 form을 활용하도록 하자
  //But, 문제점 .. form이 submit되어 웹사이트가 재시작되고 있다. 값이 저장 되지 않는다. ==> 이 순간에 브라우저가 새로고침하지 않고 user정보를 저장하도록 해야한다.
}

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// function onLoginSubmit() {
//   const username = LoginInput.value;
//   console.log(username);
// }
// //위의 코드를 바로 실행시키지 않도록 아래와 같이 argument를 추가한다.
function onLoginSubmit(event) {
  //argument의 이름은 event가 아닌 아무거나 사용해도 된다. argument를 추가함으로서 JS는 방금 일어난 event에 대한 정보를 지닌 argument를 채워 넣는다.
  event.preventDefault(); //preventDefault를 통해서 기본동작을 막는다.
  // console.log(loginInput.value);
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username); //localStorage를 이용해서 값을 저장하고, 불러오기
  // console.log(username);
  // greeting.innerText = "Hello " + username;
  // greeting.innerText = `Hello ${username}`; //이러한 형태로도 나타낼 수 있는데 `벡틱`을 사용한다는 것을 유의하자
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

// loginButton.addEventListener("click", onLoginBtnClick);
// 위의 방식처럼 button의 click여부 말고, loginForm의 submit에 초점을 두고 아래와 같이 진행, submit event가 발생하는 걸 중간에 개입해서..
// loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");

function handleLinkClick(event) {
  // alert("clicked!"); //alert를 통해서 브라우저의 기본동작을 막음 --> 잘 사용하지 않음
  event.preventDefault();
  console.dir(event);
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY); //local storage = 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고있는 작은 DB같은 API

function paintGreetings(username) {
  //여러번 반복되는 코드는 함수로 만들어서 코드를 줄일 수 있도록 하자.
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + username;
}

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
