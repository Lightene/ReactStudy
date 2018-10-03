import React, { Component } from 'react';

class PhoneForm extends Component {
    state ={
        name : '',
        phone : ''
    }

    handlechange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                        name="name"
                        placeholder="이름"
                        onChange={this.handlechange} 
                        value={this.state.name}

                        />
                <input 
                        name ="phone"
                        placeholder="전화번호" 
                        onChange={this.handlechange}
                        value={this.state.phone}

                        />
                <button type ="submit">등록하기</button>
            </form>
        );
    }
}

export default PhoneForm;