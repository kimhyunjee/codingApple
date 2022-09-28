import { useState } from "react";

function Basic() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [thumb, setThumb] = useState(0);

  //자바스크립트 destructuring 문법
  // let array = ['Kim', 20];

  // let [name, age] = ['Kim', 20]
  //= 아래처럼 쓰기도 하겠지만, 요샌 위에처럼 씀 / 등호 여러번 x 왼쪽오른쪽 형식 맞추기
  // let name = array[0]; //kim
  // let age = array[1]; //20
  //useState()를 쓰면 그 자리에 ['kim', state변경 도와주는 함수] 이렇게 들어감
  //얘네를 각각 변수로 빼ㅔ고싶을 때 let [a,b] = useState('kim')하면 됨

  //state를 쓰는 이유,
  // 일반 변수 대신 state 이용해도 자료 저장이 가능하다.
  // 근데 일반 변수로 저장하면 되는데 왜 굳이 state를??
  // state는 변동사항이 생기면 html도 자동 재렌더링이 된다.
  // 원래 let post로 빼놓았던 걸 밑에 {post}로 화면에 띄워주고 있었는데, let post 뒤 내용을
  // 맘대로 바꾼다고 해서 화면도 같이 바뀌는게 아니라 손수 바꿔줘야 한다.
  // state를 짜두면 편하게 랜더링 되어서 바꾸지 않아도 된다.

  return (
    <div className="App">
      <div className="black-nav">
        <h4
        // style={{color:'yellow',fontSize:'16px'}}
        >
          개발 블로그{" "}
        </h4>
      </div>
      {/* <h4>{post}</h4> */}
      <button
        onClick={() => {
          // title[0] = '여자 코트 추천'; //영구 수정이라 좋지 않음, 불변성 지켜주자
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        {" "}
        글 수정{" "}
      </button>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setThumb(thumb + 1);
            }}
          >
            👍
          </span>
          {thumb}
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

export default Basic;
