/* eslint-disable */

/*
[ life-cycle ]
	
	` 생명주기 함수는 클래스 컴포넌트의 기능이긴 하지만, 리액트를 이해하기 위해서는 개념을 이해해야 함
	` 라이프사이클 함수는 버전별로 없어지고 생기는 함수가 많기에 다 할 필요는 없다

	
	` 컴포넌트 업데이트 
			1) 컴포넌트의 props가 변경될 때
			2) setState() 호출로 state 값이 변경될 때
			3) forceUpdate() 호출로 컴포넌트가 다시 렌더링될 때
			4) 렌더링 후 componentDidMount() 함수가 호출 될 때 

    * 마운팅
          	마운트 : 컴포넌트가 생성되는 시점

        ` 리엑트가 처음으로 각 컴포넌트의 render() 함수를 콜해 자신의 DOM 트리를 구성하는 과정을 마운팅이라 한다.
        ` 마운팅 과정
          생성자(constructor) -> render() -> componentDidMount()
          
        ? 생성자에서 API를 호출하지 않는 이유?
          -> 생성자에서 setState 호출하면 경고 (콘솔창에)
          
          ` 마운팅이 되지 않은 상태는 컴포넌트의 프로퍼티(setState등)가 아직 준비되지 않은 상태이다.
          ` 필요한 모든 프로퍼티의 존재 여부를 모르는 상태에서 API 호출시 프로그램이 정확하지 않을 수 있기에
          

*/
import { useEffect, useState } from "react";
import '../App.css';


function FuncComp(props){
  
  var [ number, setNumber ] = useState(0)  

   //----------------------------------------------------------
   // 클래스 컴포넌트에서 componentDidMount(), componentDidUpdate(), componentWillUnmount() 합친 효과
   useEffect(function(){
    console.log(' func ==> useEffect :')
  })

  return (
    <div>
      <h3> 함수 컴포넌트 </h3>
      <p> Number : { number } </p>
      <input type='button' value='눌려1' onClick={ function(){
        setNumber(Math.round(Math.random()*100))
      }.bind(this) }></input>

      <input type='button' value='눌려2' onClick={ () => {
        setNumber(Math.round(Math.random()*100))
      }}></input>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <FuncComp></FuncComp>
    </div>
  );
}

export default App;
