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
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      {
        title.map((item, index)=>{
          return(
            <div className="list" key={index}>
            <h4 onClick={()=>{
              setModalTitle(index);
              setModal(!modal)
              }}>{title[index]}{" "}
            <span
            onClick={(e) => {
              e.stopPropagation();
              let copy = [...like];
              copy[index]++;
              setLike(copy);
            }}
          >
            좋아요
          </span>{" "}
          {like[index]}</h4>
            <p>2월 17일 발행</p>
            {/* 삭제버튼 추가 */}
            <button onClick={()=>{
              let copy = [...title];
              //splice는 새 배열을 반환함
              copy.splice(index, 1);
              console.log(copy);
              setTitle(copy);
            }}>삭제</button>
          </div>
          )
        })
      }
    
      <input 
      onChange={(e)=>{
        setInputValue(e.target.value);
      }}/>
      {/* 글추가 버튼 및 기능 */}
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy);
      }}>
        글추가하기
      </button>

      {
        modal === true ? <Modal color='skyblue' modalTitle={modalTitle} setTitle={setTitle} title={title}></Modal> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
        <h4>{props.title[props.modalTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.title];
          copy[0] = '여자 코트 추천';
          props.setTitle(copy);
        }}>글제목 수정</button> 
    </div>
    );
}

export default App;