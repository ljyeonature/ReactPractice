// 2_from / form.js

import { useState } from "react";

function MyForm(props) {
  const handleBtn = (event) => {
    event.preventDefault();
    alert("버튼 눌림");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let message = `이름: ${name} / 메세지: ${msg} / 나라: ${country} / 성별: ${gender}`;
    alert(message);
  };
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  //   const handleName = (event) => {
  //     setName(event.target.value);
  //   };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>이름 : </label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label>메세지:</label>
        <textarea
          onChange={(event) => {
            setMsg(event.target.value);
          }}
        >
          {msg}
        </textarea>
        <br />
        <label>여행갈 나라는?</label>
        <select
          defaultValue={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          <option>외국</option>
          <option>부탄</option>
          <option>한국</option>
          <option>북한</option>
        </select>
        <br />
        <label>성별 : </label>
        <input
          type="radio"
          name="gender"
          value="남자"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        남자
        <input
          type="radio"
          name="gender"
          value="여자"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        여자
        <hr />
        <hr />
        <button onClick={handleBtn}>일반버튼</button>
        <hr />
        <input type="submit" value="전송버튼" />
      </form>
    </div>
  );
}

function App() {
  return <MyForm />;
}

export default App;
