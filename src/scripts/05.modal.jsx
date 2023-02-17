/*eslint-disable*/

import { useState } from "react";
import "../App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "광주 치킨 맛집",
    "자바스크립트 독학",
  ]);
  let [like, setLike] = useState(0);
  
  //UI의 현재 상태를 state로 저장
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setLike(like++);
            }}
          >
            좋아요
          </span>{" "}
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        {/* 
          제목 누르면 모달창 띄우기 
          state 변경은 state변경함수로만 가능
        */}
        <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {/* 
        state에 따라 UI가 어떻게 보일지를 작성
        JSX에서 문을 쓸 수는 없음
        if문 대신에 삼항연산자는 사용할 수 있음
       */}
      {
        modal === true ? <Modal></Modal> : null
      }
    
    </div>
  );
}

//HTML, CSS 디자인 완성
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
