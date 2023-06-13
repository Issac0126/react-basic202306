import React from "react";


//컴포넌트
//컴포넌트 파일은 대문자로 작성하는 것이 관례이다.
// 함수명은 파일명과 동일하게 작성해주면 좋다.
function SayHello(props){
    return(
        <div>
            <p>안녕</p>
            { props.children }
            <span>룰루</span>
        </div>
    );
}

export default SayHello;