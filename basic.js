// 1. 변수
//name = "jihu";
//age = 24;

//let과 const 활용하자
//const는 상수.. 변하지 않는 값.. 가급적 대문자로 사용
//let은 변할 수 있는 값
//tip. 모든 변수를 const로 선언하고, 변경될 여지가 있는 경우 let으로 바꿔준다.
//예약어는 사용할 수 없다.
//첫글자는 숫자가 될 수 없다.
//변수는 문자와 숫자, $와 _만 사용
//let name = "jihu";

//alert(name);
//console.log(age);

//let 변수, var 변수, const 변수

//2. 자료형
const name = "jihu"; //문자형 string
//큰따옴표와 작은따옴표의 차이는 없다.

//문자열 내부에 작은 따옴표를 넣고자할 때
const message = "l'am a boy.";

//문자열 내부에 변수를 넣고자할 때
const message2 = `나의 이름은 ${name}입니다.`;
console.log(message2);

// 숫자형
const age = 24;
const PI = 3.14;

console.log(1 + 2);
console.log(10 - 3);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 % 4);
console.log(6 ** 4); //제곱

//문자형도 더하기 사용가능
console.log(message + 11 + message2 + "just studying");

const x = 1 / 0;
console.log(x); //Infinity 무한대 값을 얻는다.

const y = name / 2;
console.log(y); //NaN = Not a Number 숫자가 아닌 값.

// boolean
const a = true;
const b = false;

console.log(name == "jihu"); //true
console.log(age > 30); //false

// null과 undefined
let color;
console.log(color); //undefined 값 출력 됨.

let user = null;

// 객체형과 심볼형
//object
const superman = {
  name: "clark",
  age: 33,
};

//object 접근
superman.name;
superman["age"];
super.age;

//object 추가
superman.gender = "male";
superman["hairColor"] = "black";

//object 삭제
delete superman.hairColor;

console.log(super.name);
console.log(super.age);
console.log(superman);

function makeObject(name, age) {
  return {
    name: name,
    age: age,
    hobby: "football",
  };
}

const Mike = makeObject(Mike, 30);
console.log("age" in Mike);

for (x in Mike) {
  console.log(Mike[x]);
  //x는 Mike의 key를 가리침
}

//sayHello라는 메소드 만들기
let boy = {
  name: "Mike",
  sayHello: function () {
    console.log("hello, " + this.name);
  },
};

let girl = {
  name: "Jane",
  sayHello: function () {
    console.log("hello, " + this.name);
  },
};

let man = boy;
man.name = "Tom";
man.sayHello();

boy = null;

//이러한 것처럼 메소드에서는 this를 활용하는 것이 좋다.
man.sayHello();

// typedof 연산자
//변수의 자료형을 알아냄.
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined);

//자료형 변환 .. prompt를 통해서 받은 것은 문자형이다.. 따라서 형변환 필요
//String(), Number(), Boolean() 등의 괄호 안에 형 변환하고자 하는 것을 넣고 형변환

// 3. alert, prompt, confirm .. 대화상자
// alert 알려줌 -> 사용자가 확인을 누를 때 까지 떠 있음.
// prompt 입력 받음 -> 사용자에게 어떠한 값을 입력받을 때 사용
// confirm 확인 받음 ->
// 기본적인 창 .. 스타일링 불가
const whatName = prompt("이름을 입력하세요.");
alert("환영합니다, " + whatName + "님");
//alert(`환영합니다, ${whatName}님`);

const date = prompt("예약일을 입력해주세요.", "2023-8-");
console.log(date);
//prompt에 두개의 인수를 받을 수 있다. 첫번째 값은 메시지, 두번째 값은 디폴트 값으로 사용된다.

const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult);
//확인, 취소

// 4. 조건문
if (age > 19) {
  console.log("환영합니다.");
} else if (age == 19) {
  console.log("수능 잘치세요");
} else {
  console.log("안녕히가세요");
}

// 논리연산자
// || (OR) , && (AND) , ! (NOT)
if (name == "tom" || age > 19) {
  console.log("통과");
} else if (!isAdult) {
  console.log("돌아가세요");
}

let fruit = prompt("무슨 과일을 사고 싶나요?");

//switch
switch (fruit) {
  case "사과":
    console.log("100원입니다.");
    break;
  case "바나나":
    console.log("200원입니다.");
    break;
  default:
    console.log("그 과일은 없습니다.");
}

// 5. 반복문
for (let i = 0; i < 10; i++) {
  //반복할 조건
}

while (i < 10) {
  //반복할 조건
  i++;
}

do {
  //코드
  i++;
} while (i < 10);

//break
while (true) {
  let answer = confirm("계속할까요?");
  if (!answer) {
    break;
  }
}

//continue
for (i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
}

// 6. 함수정의 (함수 선언문)
function myFunction(x) {
  let temp = 2 * x + 3;
  return temp;
}
myFunction(1);

function showError() {
  alert("에러가 발생했습니다.");
}

function sayHello(name) {
  const msg = `Hello. ${name}`;
  console.log(msg);
}

let msg = "hello"; //전역변수
console.log("함수 호출 전");
console.log(msg);

function sayHello2(name) {
  if (name) {
    msg += `, ${name}`;
  }
  console.log("함수 내부");
  //지역변수
  console.log(msg);
}

//전역변수와 지역변수 (가급적 함수에 특화 된 지역변수를 사용해라)
let msg3 = "welcome";

function sayhello3(name) {
  let msg = "hello";
  console.log(msg + " " + name);
}

sayhello3("jihu");
console.log(msg);

function sayhello4(name) {
  let newName = name || "friend";
  let msg = "hello";
  console.log(msg + " " + newName);
}

//name의 default값을 friend로
function sayhello5(name = "friend") {
  let msg = "hello" + name;
  console.log(msg);
}

function add(num1, num2) {
  return num1 + num2;
}

//화살표 함수, 함수 선언문, 함수 표현식
//함수 선언문
function sayHello6(name) {
  const msg6 = "hello, " + name;
  console.log(msg);
}

//함수표현식
const sayHello7 = function (name) {
  const msg7 = "hello, " + name;
  console.log(msg7);
};

//화살표 함수
const sayHello8 = (name) => {
  const msg8 = "hello, " + name;
  console.log(msg8);
};

// 7. 배열
let student = ["철수", "영희", "영수"];

//push, pop, shift, unshift
let days = ["mon", "tue", "wed"];
days[1] = "화요일";
days.push("thu");
days.unshift("sun");

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

for (let day of days) {
  console.log(day);
}
