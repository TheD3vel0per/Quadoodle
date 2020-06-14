import React from 'react';


class Footer extends React.Component {
    state = { };

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <footer className="page-footer font-small blue pt-4">

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="https://quadoodle.online/"> Quadoodle.online</a>
            </div>

          
          </footer>
        );
    }
}

export default Footer;