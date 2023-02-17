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
  //input.value를 저장하기 위한 state
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
              {/* <span>만 누른게 아니라 <div>와 <h4>도 눌렀음 */}
            <span
            // 이벤트 버블링을 막을 때는 e.stopPropagation()
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
          </div>
          )
        })
      }
    
      {/* onChange, onInput 이벤트는 input 안의 변화를 감지할 때 유용함 */}
      <input 
      //<input>에 입력한 값 가져오는 법은 이벤트 객체 사용
      onChange={(e)=>{
        //e.target.value는 input에 입력된 값을 저장함
        //state변경함수는 비동기처리가 됨
        setInputValue(e.target.value);
        console.log(inputValue);
      }}/>

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