import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

class Header extends React.Component {
    state = { auth: null };

    constructor(props) {
        super(props);
    }

    login = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        // firebase.auth().currentUser // user or null

        const persistenceResult = await firebase.auth().setPersistence('local');
        const authResult = await firebase.auth().signInWithPopup(provider);
        console.log(authResult);

        this.setState({ auth: authResult });
    };

    logout = async () => {

        await firebase.auth().signOut();
        this.setState({ auth: null });
        console.log(firebase.auth());
    };

    // <Link to='/'></Link>

    render() {
        const user = firebase.auth().currentUser;
        return (
            <Navbar bg='primary' expand='lg'>
                <Navbar.Brand>
                    <Link to='/' className='navbar-brand' style={{color: 'white'}}>Quadoodle</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Link to='/' className='nav-link' style={{color: 'white'}}>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/about-us' className='nav-link' style={{color: 'white'}}>About Us</Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link onClick={user ? this.logout : this.login} style={{color: 'white'}}>
                                {user ? user.displayName + " " : ""}
                                Log {user ? "Out" : "In With Facebook"}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Header;