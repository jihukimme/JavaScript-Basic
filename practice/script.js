const loginBox = document.querySelector(".login-box");
const signupLink = document.getElementById("signup-link");
const signupBox = document.querySelector(".signup-box");
const loginLink = document.getElementById("login-link");

document.addEventListener("DOMContentLoaded", function () {
  // 로그인 창 표시
  setTimeout(function () {
    loginBox.classList.add("show");
  }, 500);

  // 회원가입 링크 클릭 시 이벤트 처리
  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(function () {
      signupBox.classList.add("show");
      loginBox.classList.remove("show");
    }, 500);
    signupBox.style.display = "block";
    loginBox.style.display = "none";
  });

  // 회원가입 창에서 로그인 링크 클릭 시 이벤트 처리
  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(function () {
      loginBox.classList.add("show");
      signupBox.classList.remove("show");
    }, 500);
    loginBox.style.display = "block";
    signupBox.style.display = "none";
  });
});
