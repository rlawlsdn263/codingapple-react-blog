/*eslint-disable*/

import { useState } from "react";
import "../App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "광주 치킨 맛집",
    "자바스크립트 독학",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      {
        title.map((item, index)=>{
          return(
            <div className="list" key={index}>
            <h4 onClick={()=>{setModal(!modal)}}>{title[index]}{" "}
            <span
            onClick={() => {
              let copy = [...like];
              copy[index]++;
              setLike(copy);
            }}
          >
            좋아요
          </span>{" "}
          {like[index]}</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
    
      {/* 
        부모 state 자식한테 전송하기 
        props 작명은 보통 state의 이름을 딴다
        props는 문자, 숫자, 함수도 전송가능함
      */}
      {
        modal === true ? <Modal color='skyblue' title={title}></Modal> : null
      }

    </div>
  );
}

//props 파라미터 등록 후 props.작명 사용
//함수의 파라미터 문법과 유사함
function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
