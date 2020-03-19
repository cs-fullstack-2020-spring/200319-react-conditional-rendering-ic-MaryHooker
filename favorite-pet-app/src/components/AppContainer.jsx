import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLikesCats: false,
            userLikesDogs: false,
        }
    }

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

        let userFavorite;

        if(this.state.userLikesCats){
            userFavorite = <Cat/>
        } else if(this.state.userLikesDogs){
            userFavorite = <Dog/>
        }

        return (
            <div>
                <h1>Favorite Pet App</h1>
                <button onClick={this.updateUserLikesCats} className='button'>I Love Cats</button>
                <br/>
                <br/>
                <button onClick={this.updateUserLikesDogs} className='button'>I Love Dogs</button>
                
                {userFavorite}
            </div>
        );
    }
}

export default AppContainer;