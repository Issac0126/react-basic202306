import React, { useState } from 'react'

const NickName = () => {

    //useState 훅은 배열을 리턴하는데,
    //0번에는 상태변수값, 1번에는 상태변수값을 변경할 수 있는 setter 함수가 제공됨.

    //useState의 리턴 타입이 배열이기 때문에 구조 분해 할당을 통해
    //쉽게 이름을 지어서 사용이 가능하다. (관레식: [상태변수값, set상태변수값])
    const [nickName, setNickName] = useState('김철수');
    // console.log('userState: ', useState());
    // let nickName = '김철수';

    const changeNickName = (e) =>{
        setNickName('척척박사'); //setState의 setter를 호출해서 상태변수의 값을 변경.
        console.log('버튼이 눌림. changeNickName called!!!!');
        console.log('nickName: '+nickName);
    }

  return (
    <>
        <h1>Hello, {nickName}!</h1>
        <button className='btn' onClick={ changeNickName }>똑똑이</button>
        <button className='btn' onClick={ () => { setNickName('톼뫄톼') } }>토마토</button>
    </>
  )
}

export default NickName