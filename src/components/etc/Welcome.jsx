
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

import logo from '../img/star.png';
import '../css/_Welcome.scss';

function App() {
  
  const navigate = useNavigate();
      
  /* 클릭하면 애니메이션등 변화를 줄때 사용하는 코드
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () =>{
    setIsClicked(true); //클릭하면 애니메이션 시작
    setTimeout(() => {
      navigate('/home');},500)}; //애니메이션이 1초동안 동작 후 페이지로 이동*/

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} 
             className="App-logo"
             alt="logo" 
             onClick={() => navigate('/home')}/>
        
        <p>
          Welcome to MY PORTFOLIO
        </p>
      </header>
    </div>
 <Outlet/>

    </>
  );
}

export default App;
