import React from "react"

class Header extends React.Component {

    render() {

        return (
            <div className="row jumbotron valign-wrapper">
                <div className="score">
                    <h1>Puppy Memory Game</h1>
                    <p>click on each puppy once and only once</p>
                    
                </div>
            </div>
        )
        }
}

export default Header