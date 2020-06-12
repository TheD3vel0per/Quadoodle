import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

class Header extends React.Component {
    state = {auth: null};

    constructor(props) {
        super(props);
    }

    login = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        
        // firebase.auth().currentUser // user or null

        const persistenceResult = await firebase.auth().setPersistence('local');
        const authResult = await firebase.auth().signInWithPopup(provider);
        console.log(authResult);
        
        this.setState({auth: authResult});
    };

    logout = async () => {
        
        await firebase.auth().signOut();
        this.setState({auth: null});
        console.log(firebase.auth());
    };

    // <Link to='/'></Link>

    render() {
        return (

            <Navbar bg='primary' expand='lg'>
                <Navbar.Brand>
                    <Link to='/' className='navbar-brand'>Quadoodle</Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Link to='/' className='nav-link'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/about' className='nav-link'>About Us</Link>
                    </Nav.Item>
                    <Nav.Item>
                        {(() => {
                            if (firebase.auth().currentUser === null) { // not logged in 
                                return (<Nav.Link onClick={this.login}>Log In</Nav.Link>);
                            } else { // logged in
                                return (
                                    <>
                                        <p>Hello, {firebase.auth().currentUser}</p>
                                        <Nav.Link onClick={this.logout}>Log Out</Nav.Link>
                                    </>);
                            }
                        })()}
                    </Nav.Item>
                </Nav>
            </Navbar>

        );
    }
}

export default Header;