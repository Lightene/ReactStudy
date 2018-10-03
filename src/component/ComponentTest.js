import React,{Component} from 'react';

class ComponentTest extends Component{
    state = {
        value : 0
    }

    static  getDerivedStateFromProps(nextProps, prevState) // nextProps : 업뎃 이후 데이터, prevState : 업뎃 이전 상태 State
    {
        {/* Component 초기 생성때에도 사용이 됨 */}
        {/* props로 받아온 값을 state로 동기화 하는 작업을 할때 씀 */}
        {/* Object(객체)를 return 해주면 그 Object 값이 state로 들어감  */}

        if(prevState.value !== nextProps.value)
        {
            return {
                value : nextProps.value
            };
        }
        return null;
    }

    shouldComponentUpdaate(nextProps, nesxtState){
        {/* 특정 조건에 따른 렌더링을 안함 */}

        if(nextProps.value === 10) return false;
        return true;
    }

    // 업데이트 이후 호출
    componentDidUpdate(nextProps, prevState){
        if(this.props.value !== prevState.value)
        {
            console.log('value 값이 변경됨!', this.props.value);
        }
    }

    // 컴포넌트가 실제로 삭제시에 호출
    componentWillUnmount()
    {
        console.log('GoodBye');
    }


    render(){
        return(
            <div>
                <p>props : {this.props.value}</p>
                <p>state : {this.state.value}</p>
            </div>
        )
    }
}

export default ComponentTest;