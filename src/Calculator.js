import React from 'react'
class Calculator extends React.Component {
    state = {
        num1: '',
        num2: '',
        sum: ''
    }
    setNum = (e, num) => {
        console.log('this num: ', e.target.value)
         this.setState({ [num]: e.target.value});
    }
    addNum = () => {
        console.log(`this is the sum:, ${this.state.num1} + ${this.state.num2}`)
        this.setState({ 
            sum: parseInt(this.state.num1) + parseInt(this.state.num2) 
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                  <div className="add">
                    <input type="text"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    
                    <span>+</span>
                    <input type="text"
                        name="num2"
                        placeholder="Enter your first number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    
                    <button onClick={ () => this.addNum() }>=</button>
                    <h3>Sum:</h3>
                    <h4>{this.state.sum}</h4>
                  </div>
            </div>
        )
    }
}
export default Calculator