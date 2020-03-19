import React,{Component} from 'react';

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
              <h2>You're a dog person!</h2>
              <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/15/17/pixel-dogsofinstagram-3-15-19.jpg" alt="dog" className='dog'/>
            </div>
         );
    }
}
 
export default Dog;