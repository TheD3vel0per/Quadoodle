import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../components/Header.css';

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
                    <Link to='/'>
                        <img
                            src="/assets/logo.svg"
                            width="65"
                            height="65"
                            className="d-inline-block align-top"
                            alt="Quadoodle logo"
                            style={{
                                borderRadius: 12
                            }}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="navbar-nav mr-auto">
                        <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/' className="nav-link d-flex flex-column" style={{ color: 'white' }}><i className="fa fa-home fa-3x"></i><span className="d-none d-sm-inline">Home</span></Link>
                        </Nav.Item>
                        <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/join' className="nav-link d-flex flex-column" style={{ color: 'white' }}><i className="fa fa-group fa-3x"></i><span className="d-none d-sm-inline">Join a Game!</span></Link>
                        </Nav.Item>
                        <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/about-us' className="nav-link d-flex flex-column" style={{ color: 'white' }}><i className="fa fa-address-book-o fa-3x"></i><span className="d-none d-sm-inline">About Us</span></Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link onClick={user ? this.logout : this.login} style={{ color: 'white' }}>
                                <div style={{ fontWeight: 'bold' }}>{user ? user.displayName + " " : ""}</div>
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