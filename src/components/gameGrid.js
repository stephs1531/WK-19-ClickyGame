import React from "react"
import puppypics from "../puppypics.json"


class Game extends React.Component {
    //map over puppypics.json and assign each image to a card
    render() {
    const puppyImages = puppypics.map(puppy => <div className="card"><div class="card-image"><img alt="" src={puppy.image}></img></div></div>)
    return (
        //return grid of cards with puppy images
        <div className="game-container">
            {puppyImages}
        </div>
    )
}
}

export default Game