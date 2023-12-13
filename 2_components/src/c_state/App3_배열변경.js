// App3_배열변경.js
import { useState } from "react";
function App() {
  let [title, setTitle] = useState(["맛집1", "맛집2", "맛집3"]);

  function setData(idx) {
    let chtitle = ["변경1", "변경2", "변경3"];
    title[idx] = chtitle[idx];
    setTitle([...title]);
  }

  return (
    <div>
      <div>{title}</div> <hr />
      {/* '변경' 버튼을 클릭하면 내용을 변경하기 */}
      <button
        onClick={() => {
          setTitle(["짬뽕", "카레", "밥집"]);
        }}
      >
        변경
      </button>
      <hr />
      <ul>
        {title.map((item, idx) => {
          return (
            <li
              key={idx}
              onClick={() => {
                setData(idx);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
