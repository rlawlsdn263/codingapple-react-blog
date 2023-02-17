import "../App.css";

function App() {
  // 서버에서 가져온 데이터
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      {/* class 대신에 className */}
      <div className="black-nav">
        {/* style 넣을 때는 style={객체} */}
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그임</h4>
      </div>
      {/* 변수 넣을 때는 {중괄호} */}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
