import React, {Component} from 'react';
import NavWithSidebar from '../components/NavWithSidebar';

const styles = theme => ({
    centering: {
      height: "100%"
    }
  });

class Home extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <NavWithSidebar current="home"/>
            </div>
        );
    }
};

export default Home;