import React from 'react'
import './style.css'

const SubmitEvent = () => {

    const send = e => { 
        e.preventDefault(); //submit 기능 중지.

        const $nick = document.getElementById('nickName');
        console.log('닉네임: '+$nick.value);
    }

    // const buttonStyle = {
    //     color : 'yellow',
    //     backgroundColor : 'tomato',
    //     fontSize : '1.5em'
    // };


  return (
    <form onSubmit={send}>
        <input type='text' id='nickName' name='nick'/>
        <button type='submit'>확인</button>
    </form>
  )
}

export default SubmitEvent;