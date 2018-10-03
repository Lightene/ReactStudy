import React, { Component } from 'react';
import './App.css';

import NameTest from "./component/NameTest";
import Counter from "./component/Counter";
import ComponentTest from "./component/ComponentTest";
import PhoneForm from './component/PhoneForm';
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {
    
    id = 0;

    state = {
        counter : 1,
        err :false,
        information :[]
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

    // 에러 처리
    // 부모 component에서 처리해야함
    componentDidCatch(err, info ){
        console.log(err);
        console.log(info);
        this.setState({
            err : true
        });
        // API를 통해 서버로 오류내용 push
    }



    handleClick = () =>{
        this.setState({
            counter : this.state.counter +1
        });
    };

    handleCreate = (data) =>{
        const {information} = this.state;
        this.setState({
            information : this.state.information.concat({
                ...data,
                id : this.id++
            })
        })
    }

  render() {
      if(this.state.err){
          return(
              <div>에러가 났습니다.</div>
          )
      }
    return (
      <div className="App">
            <div ref={ref=> this.myDiv = ref} />
            <br />
            <h1>Hi!</h1>
            <NameTest name ="React"/> <br/>
            <Counter /> <br />
            {this.state.counter < 10 && <ComponentTest value={this.state.counter}  />}
            <button onClick={this.handleClick}> Click Me </button> <br/>
            
            <PhoneForm onCreate={this.handleCreate}/>
            {JSON.stringify(this.state.information)}

            <PhoneInfoList data ={this.state.information}/>

      </div>
    );
  }
}

export default App;
