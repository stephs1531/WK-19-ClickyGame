import React from "react"

class Header extends React.Component {
state={
    correct: 0,
    incorrect: 0
};

    render() {

        return (
            <div className="row jumbotron valign-wrapper">
                <div className="score">
                    <h1>React Memory Game</h1>
                    <h3>Score:</h3>
                    <h5>Correct: {this.state.correct} Incorrect: {this.state.incorrect}</h5>
                </div>
            </div>
        )
        }
}

export default Header