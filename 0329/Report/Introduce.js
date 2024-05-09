import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement("h1", null, "나의 자기 소개"),
        React.createElement("p", null, "안녕하세요! 저는 20학번 전유빈 입니다."),
        React.createElement("p", null, "현재 소프트웨어학과 3학년으로 재학 중입니다."),
        React.createElement("p", null, "더 자세한 정보를 알고 싶으시면 ",
            React.createElement("a", {
                href: "http://127.0.0.1:5500/React/0329/Report/Introduce.html"
            }, "여기"), "를 클릭해주세요.")
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
