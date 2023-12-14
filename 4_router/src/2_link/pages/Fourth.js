// Fourth.js

import { useParams } from "react-router-dom";

const Fourth = (props) => {
  const { idx, name } = useParams();
  const iname = props.datas[idx].img;
  //   console.log(iname);
  return (
    <div>
      여기는 네번째 페이지 - 영화 상세 페이지
      <hr />
      <div>
        {idx} : [ {name} ]
      </div>
      <img src={`../../imgs/${iname}`}></img>
    </div>
  );
};

export default Fourth;
