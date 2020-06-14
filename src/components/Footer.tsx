import React from 'react';
import {
     MDBCol, 
     MDBContainer, 
     MDBRow, 
     MDBFooter,
     } 
from "mdbreact";
import './Footer.css';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    state = { };

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <footer 
                className="footer navbar-fixed-bottom">

            <MDBFooter color="blue" className="font-small pt-4 mt-4">

            <div className="footer-copyright text-center py-3" style={{color: 'white'}}>
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://quadoodle.online" style={{color: 'white'}}> Quadoodle.online </a>
                | <Link to="/privacy-policy" style={{color: 'white'}}>Privacy Policy</Link>
              </MDBContainer>
            </div>

          </MDBFooter>

        </footer>

        );
    }
}

export default Footer;