import React,{Component} from 'react';

class ComponentTest extends Component{
    state = {
        value : 0
    }

    static  getDerivedStateFromProps(nextProps, prevState)
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