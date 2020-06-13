import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



class CombinedPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />


                

            <div>
                <Link to={"/session/"}>
                                <Button  className="btn btn-primary" size="lg" >
                                    Quit Game
                                </Button>
                </Link>
            </div>
            </>
        );
    }

}

export default CombinedPage;