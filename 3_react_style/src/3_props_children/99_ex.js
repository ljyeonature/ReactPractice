import { useState } from "react";

function WonDal(props) {
  const [won, setWon] = useState(0);
  const [dal, setDal] = useState(0);

  return (
    <div>
      <fieldset>
        <legend>원화 금액을 입력하세요</legend>
        <input
          type="text"
          value={won}
          onChange={(event) => {
            setDal(event.target.value / 1300);
            setWon(event.target.value);
          }}
        />
      </fieldset>
      <fieldset>
        <legend>달러 금액을 입력하세요</legend>
        <input
          type="text"
          value={dal}
          onChange={(event) => {
            setWon(event.target.value * 1300);
            setDal(event.target.value);
          }}
        />
      </fieldset>
    </div>
  );
}

function App() {
  return (
    <div>
      <WonDal />
    </div>
  );
}

export default App;
