//rafce

import React from 'react'

const ClickEvent = () => {
    const greeting = function(e) {
            alert('나무')
    }
    const changeBox = function(e) {
        const $box = document.querySelector('.box');
        $box.style.backgroundColor = 'skyblue';
        $box.style.height = '200px';
        $box.style.width = '200px';
    }


  return (
    <>
        <button id='btn1' onClick={ () => alert('왜 클릭하셨어요') }>클릭하면안됨</button>
        <button id='btn2' onClick={ greeting }>누르면 나무가 자랍니다.</button>
        <button id='btn3' onMouseOver={ changeBox }>예쁜 버튼</button>

         <div class='box'></div>
    </>
  )
}

export default ClickEvent