import React from "react"
import puppypics from "../puppypics.json"


class Game extends React.Component {
    state={
        correct: 0,
        wins: 0,
        puppies: []
    };

    puppyClick = (event) => {
        console.log("Hi i'm clicked!");
        // console.log(event.target.getAttribute("puppyId"))
        
        //conditional logic
        if (this.state.puppies.includes(event.target.getAttribute("puppyId"))) {
            console.log("restart game");
            console.log(event.target.getAttribute("puppyId"));
            console.log(this.state.puppies);
        } else {
            this.state.puppies.push(event.target.getAttribute("puppyId"));
            this.setState({ correct: this.state.correct + 1 });

        }
            //see if id already exists)

    }
    //map over puppypics.json and assign each image to a card
    render() {
    const puppyImages = puppypics.map(puppy => <div className="card" onClick={this.puppyClick} puppyId={puppy.id}><div class="card-image"><img alt="" puppyId={puppy.id} src={puppy.image}></img></div></div>)
    return (
        //return grid of cards with puppy images
       <>
            <div className="score">
                    <h3>Score:</h3>
                    <h5>Correct: {this.state.correct} Incorrect: {this.state.incorrect}</h5>
            </div>
            <div className="game-container">
                {puppyImages}
            </div>
       </>
    )
}
}

export default Game