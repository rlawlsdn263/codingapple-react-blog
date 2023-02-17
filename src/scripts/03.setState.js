/*eslint-disable*/

import { useState } from "react";
import "../App.css";

function App() {
  /*   
    title에는 state에 보관한 자료
    setTitle에는 state 변경을 도와주는 함수
  */
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "광주 치킨 맛집",
    "자바스크립트 독학",
  ]);

  //state변경함수를 쓰면 state를 변경할 수 있다
  let [like, setLike] = useState(0);

  return (
    // return() 안에는 병렬로 태그 2개 이상 금지
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
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
