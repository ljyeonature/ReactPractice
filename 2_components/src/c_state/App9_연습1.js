import '../App.css';

import { useState } from 'react';

function App() {
   
    let [ title, setTitle]  = useState('맛집정보')
  
    return (
       <div className="App">
       <ul>
          {/* 여기 li 요소를 클릭시 '맛집정보'라는 title 변수의 값을 변경 */}
          <li className='App-title'>하나</li>
          <li className='App-title'>둘</li>
          <li className='App-title'>셋</li>
        </ul>
        <div className='App-header'>{ title } </div>
       </div>
    );
  }
  export default App;