import React, { Component } from 'react';
import './App.css';

import NameTest from "./NameTest";
import Counter from "./Counter";
import ComponentTest from "./ComponentTest";

class App extends Component {
    state = {
        counter : 1
    }

    constructor(props){
        {/* 초기 생성자 함수 */}
        {/* 컴포넌트가 새로 만들어질 때마다 호출됨 */}
        super(props);
    }

    ComponentDidMount(){
        {/* 외부 라이브러리 요청, 데이터 요청, DOM 관련 작업을 할때 사용됨 */}

        console.log(this.myDiv.getBoundingClientRect().height);  {/* 특정 돔의 크기를 알아볼 수 있음 */}
    }

    handleClick = () =>{
        this.setState({
            counter : this.state.counter +1
        });
    }

  render() {
    return (
      <div className="App">
          <div ref={ref=> this.myDiv = ref} />
          <br />
          <h1>Hi!</h1>
          <NameTest name ="React"/> <br/>
          <Counter /> <br />
          <ComponentTest value={this.state.counter}  />
          <button onClick={this.handleClick}> Click Me </button>
      </div>
    );
  }
}

export default App;
