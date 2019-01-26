import React, {Component} from 'react';
import NavWithSidebar from '../components/NavWithSidebar';

class Profile extends Component {

    render() {
        return (
            <div>
                <NavWithSidebar current="search"/>
                <h1>Search</h1>
            </div>
        );
    }
};

export default Profile;