import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="navbar">
                <h2>Welcome, i hope you're happy to know who i am</h2>
            </div>
        );
    }
}
 
export default Header;