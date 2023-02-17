/*eslint-disable*/

import React, { Component, useState } from 'react';
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
              //splice(삭제하고싶은 위치, 갯수)
              //참고로 splice는 새 배열을 반환함
              copy.splice(index, 1);
              setTitle(copy);
            }}>삭제</button>
          </div>
          )
        })
      }

      {
        modal === true ? <Modal color='skyblue' modalTitle={modalTitle} setTitle={setTitle} title={title}></Modal> : null
      }

      <Modal2></Modal2>
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

//Class 컴포넌트
class Modal2 extends React.Component{
  //props 전송하기
  //this.props로 자식 컴포넌트에서 접근가능
  constructor(props){
    super(props);
    //state 만들기
    this.state = {
      name: '진우',
      age: 28
    }
  }
  render(){
    return(
      //state 사용하기 
      <div>{this.state.age}
        <button onClick={()=>{
          //setState로 변경가능
          //기존 state를 갈아치우지 않고 변경사항만 반영함
          this.setState({
            age: 21
          })
        }}>state변경하기</button>
      </div>
    )
  }
}



export default App;
