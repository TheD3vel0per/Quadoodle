import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Typing from 'react-typing-animation';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


class DummyPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>
                <Header />
                <ListGroup style={{ maxHeight: '300px', maxWidth: '600px', overflow: 'auto', padding: '10px 15px' }} className="center">
                    <ListGroup.Item action variant="secondary" className="text-center">
                        <Typing speed={1}>
                            <span>Player 1</span>
                        </Typing>
                    </ListGroup.Item>
                    <ListGroup.Item action variant="success" className="text-center" >
                        <Typing speed={1}>
                            <Typing.Delay ms={1000} />
                            <span>Player 2</span>
                        </Typing>

                    </ListGroup.Item>
                    <ListGroup.Item action variant="danger" className="text-center">
                        <Typing speed={1}>
                            <Typing.Delay ms={2000} />
                            <span>Player 3</span>
                        </Typing>

                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning" className="text-center" >
                        <Typing speed={1}>
                            <Typing.Delay ms={3000} />
                            <span>Player 4</span>
                        </Typing>

                    </ListGroup.Item>

                </ListGroup>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <div>
                        <Link to={"/session/"}>
                            <Button className="btn btn-primary" size="lg" >
                                Start Game
                                </Button>
                        </Link>
                        <div>
                            <Link to={"/session/"}>
                                <Button className="btn btn-primary" size="lg">
                                    Quit Game
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default DummyPage;