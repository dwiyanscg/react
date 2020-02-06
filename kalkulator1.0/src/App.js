import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";




class App extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "`") {

            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        this.state.result = this.state.result.replace('÷', '/')
        this.state.result = this.state.result.replace('×', '*')
        console.log(this.state.result)
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

        if (this.state.result.includes('%')) {
            this.state.result = this.state.result.replace('%','');
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result + ' / 100' ) || "") + ""
            })
        } else {
            try {
                this.setState({
                    // eslint-disable-next-line
                    result: (eval(this.state.result) || "") + ""
                })
            } catch (e) {
                this.setState({
                    result: "error"
                })

            }
        }

    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 style={{ textAlign: 'center' }} >KLKLTR 1.0</h1>
                    <ResultComponent result={this.state.result} />
                    <KeyPadComponent onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default App;
