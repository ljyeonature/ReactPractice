// 2_containment.js

import { useState } from "react";
import "./temp.css";

function FancyBorder(props) {
  return <div className="FancyBorder">{props.children}</div>;
}

function TextPart(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>

      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return <TextPart title="환영합니다" message="우리 사이트에 온 당신은 행운" />;
}

function MorningDialog(props) {
  const [nickname, setNickname] = useState("");
  const handleHello = () => {
    alert(`굿모닝 ${nickname}님`);
  };
  return (
    <TextPart title="좋은아침" message="이름을 입력하세요">
      <input
        type="text"
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
      />
      <button onClick={handleHello}>등록</button>
    </TextPart>
  );
}

function App() {
  return (
    <div>
      <WelcomeDialog />
      <hr />
      <MorningDialog />
    </div>
  );
}

export default App;
