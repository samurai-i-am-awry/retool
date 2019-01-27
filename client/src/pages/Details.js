import React, {Component} from 'react';
import NavWithSidebar from '../components/NavWithSidebar';

class Details extends Component {

    render() {
        return (
            <div>
                <NavWithSidebar current="details" tool={this.props.match.params.id}/>
            </div>
        );
    }
};

export default Details;