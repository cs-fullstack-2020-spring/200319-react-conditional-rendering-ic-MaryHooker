import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Set initial state 
            userLikesCats: false,
            userLikesDogs: false,
        }
    }

    //function to run when button is pushed that updates the state of userLikesCats to true and sets the userLikesDogs to false
    updateUserLikesCats = () =>{
        this.setState(
            {
                userLikesCats: true
            }
        )

        this.setState(
            {
                userLikesDogs: false
            }
        )
    }

     //function to run when button is pushed that updates the state of userLikesDogs to true and sets the userLikesCats to false
    updateUserLikesDogs = () =>{
        this.setState(
            {
                userLikesDogs: true
            }
        )

        this.setState(
            {
                userLikesCats: false
            }
        )
    }

    render() {
        //Declare an empty variable to hold the child components and render a certain page depending on the below conditional statement
        let userFavorite;
        //set conditional that says if user likes cats set the userFavorite to the child component cat
        if(this.state.userLikesCats){
            userFavorite = <Cat/>
            //OR if user likes dogs render the child component Dog 
        } else if(this.state.userLikesDogs){
            userFavorite = <Dog/>
        }

        return (
            <div>
                <h1>Favorite Pet App</h1>
                {/* Reference the function above inside of the button tag for cats */}
                <button onClick={this.updateUserLikesCats} className='button'>I Love Cats</button>
                <br/>
                <br/>
                {/* Reference the function above inside of the button tag for dogs */}
                <button onClick={this.updateUserLikesDogs} className='button'>I Love Dogs</button>
                
                {/* variable made to handle the child component conditionals*/}
                {userFavorite}
            </div>
        );
    }
}

export default AppContainer;