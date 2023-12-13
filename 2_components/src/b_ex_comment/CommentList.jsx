import React from "react";
import Comment from "./Comment";
// 리스트 요소 키값 부여 해야 함.
const comments = [
  {
    no: 1,
    name: "홍순이",
    comment: "안녕하세요",
    imgname: "imgs/img1.PNG",
  },
  {
    no: 2,
    name: "홍길동",
    comment: "오늘도 행복~!",
    imgname: "imgs/img2.PNG",
  },
  {
    no: 3,
    name: "박길동",
    comment: "리액트~ 화이팅!!!!!",
    imgname: "imgs/img3.PNG",
  },
];

function CommentList() {
  return (
    <div>
      {comments.map((comment) => {
        return (
          // 키 값 넣어주기 -> 안그럼 경고 뜸
          <Comment
            key={comment.no}
            name={comment.name}
            comment={comment.comment}
            imgname={comment.imgname}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
