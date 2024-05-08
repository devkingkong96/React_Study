import React from "react";
import Book from "./Book";

// Library라는 이름의 react 함수 컴포넌트 생성
// Library 컴포넌트는 총 3개의 Book 컴포넌트를 렌더링하고 있다.
function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;