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
  //UI의 상태를 저장해두는 state
  //부모, 자식 컴포넌트가 모두 쓰는 state는 부모한테 만들어야 함
  let [modalTitle, setModalTitle] = useState(0);

  return (
    <div className="App">
      {
        title.map((item, index)=>{
          return(
            <div className="list" key={index}>
            <h4 onClick={()=>{
              //state의 상태를 바꿔준다
              setModalTitle(index);
              setModal(!modal)
              }}>{title[index]}{" "}
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
    
      {
        modal === true ? <Modal color='skyblue' modalTitle={modalTitle} setTitle={setTitle} title={title}></Modal> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
        {/* props로 가져온 modalTitle은 title의 인덱스값을 갖고 있음 */}
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