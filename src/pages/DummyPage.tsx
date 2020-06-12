import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class DummyPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <ListGroup>
                    <ListGroup.Item>No style</ListGroup.Item>
                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                    <ListGroup.Item action variant="secondary">
                        Player 1
                    </ListGroup.Item>
                    <ListGroup.Item action variant="success">
                         Player 2

                     </ListGroup.Item>
                    <ListGroup.Item action variant="danger">
                         Player 3

                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                         Player 4

                     </ListGroup.Item>
                    
                </ListGroup>
            </>
        );

    }
}

export default DummyPage;