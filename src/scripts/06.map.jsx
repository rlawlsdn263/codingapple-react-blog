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
      {/* 
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
          <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
          <p>2월 17일 발행</p>
        </div> 
      */}

      {
        title.map((item, index)=>{
          return(
            <div className="list" key={index}>
            <h4>{title[index]}{" "}
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
    
    </div>
  );
}

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
