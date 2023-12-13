// App2_Button.js

import "../App.css";

function Button(props) {
  return <button className={`App-${props.css}`}>{props.label}</button>;
}

function App() {
  return (
    <div className="App">
      <Button css="link" label="확인버튼" />
      <Button css="logo" label="참고버튼" />
    </div>
  );
}

export default App;
