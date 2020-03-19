import React,{Component} from 'react';

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>You're a <span className='catDog'>cat</span> person!</h2>
                <img src="https://cdn.vox-cdn.com/thumbor/-XrOUcsL2DeFQd6DSColBnqc2qg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19424316/EKo3U_qXkAEK1Fz.jpeg" alt="cat" className='cat'/>
            </div>
         );
    }
}
 
export default Cat;