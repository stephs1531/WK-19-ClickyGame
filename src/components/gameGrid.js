import React from "react"
import puppypics from "../puppypics.json"


class Game extends React.Component {
    state={
        correct: 0,
        wins: 0,
        losses: 0,
        puppies: []
    };

    shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    
    };

    puppyClick = (event) => {
        console.log("Hi i'm clicked!");
        
        //conditional logic
        //check to see if the puppy you clicked is in the new puppies array
        if (this.state.puppies.includes(event.target.getAttribute("puppyId"))) {
            console.log(event.target.getAttribute("puppyId"));
            console.log(this.state.puppies);
            //reset game if you click on a puppy twice
            this.setState({correct: 0});
            this.setState({losses: this.state.losses +1})
            this.setState({puppies: []});

        } else {
            //get the id of the puppy that's been clicked and push it to the new puppies array
            this.state.puppies.push(event.target.getAttribute("puppyId"));
            this.setState({ correct: this.state.correct + 1 });
            //reset the game if you click all the puppies once
             if (this.state.puppies.length > 8) {
                console.log("You win!")
                this.setState({wins: this.state.wins +1})
                this.setState({correct: 0});
                this.setState({puppies: []});
            }

        }
        
        //shuffle puppies logic
        this.shuffle(puppypics);
   



    }
    //map over puppypics.json and assign each image to a card
    render() {
    const puppyImages = puppypics.map(puppy => <div className="card" onClick={this.puppyClick} puppyId={puppy.id}><div class="card-image"><img alt="" puppyId={puppy.id} src={puppy.image}></img></div></div>)
    return (
        //return grid of cards with puppy images
       <>
            <div className="score">
                    <h4>Correct: {this.state.correct}</h4>
                    <h5>Wins: {this.state.wins} Losses: {this.state.losses}</h5>
            </div>
            <div className="game-container">
                {puppyImages}
            </div>
       </>
    )
}
}

export default Game