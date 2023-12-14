// Third.js

import { Link } from "react-router-dom";

const Third = (props) => {
  const list = props.datas.map((data, idx) => {
    return (
      <div key={idx}>
        <h3>
          <Link to={`/fourth/${idx}/${data.title}`}>{data.title}</Link>
        </h3>
        <img src={`imgs/${data.img}`}></img>
      </div>
    );
  });
  return (
    <div>
      여기는 세번째 페이지입니다
      <hr />
      <div>{list}</div>
    </div>
  );
};

export default Third;
