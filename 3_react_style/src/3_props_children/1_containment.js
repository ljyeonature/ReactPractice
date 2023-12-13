// 3_props_children / 1_containment.js

import "./temp.css";

function FancyBorder(props) {
  return (
    <div className="FancyBorder">
      <div>{props.data}</div>
      {props.children}
      {props.children}
    </div>
  );
}

function WelcomePart(props) {
  return (
    <FancyBorder data="중요한 정보">
      <h1 className="Dialog-title">환영합니다</h1>
      <p className="Dialog-message">우리 사이트 방문은 당신에게 행운입니다</p>
    </FancyBorder>
  );
}

function App() {
  return <WelcomePart />;
}

export default App;
