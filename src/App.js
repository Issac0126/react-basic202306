import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import Hello from './Hello';



//리액트에서는 하나의 컴포넌트가 여러개의 엘리먼트를 반환할 수 있다.
//JSX를 작성할 때 return 문 안에 반드시 하나의 최상위 태그가 있어야 한다.
//Fragment를 사용하면 의미없는 태그를 줄여 가독성을 좋게 한다.
function App() {

  
  const looping = () => {

    const helloList = [];

    for(let i = 0; i<5; i++){
      helloList.push(<Hello />)
    }

    return helloList;
  }

  //jsx 문법에서는 스크립트를 코드로 직접 사용이 불가능하다.
  //{} 안에서 함수의 호출문이나 변수 참조는 가능하다.
  return (
    <>
      <SayHello />
      <br />
      
      { looping() }
    </>
  );
}

export default App;
