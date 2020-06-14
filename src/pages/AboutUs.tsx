
import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import './AboutUs.css';
import Header from '../components/Header';

class AboutUsPage extends React.Component {

  componentDidMount() {

    AOS.init(
        {
           duration: 2000,
           delay:500,
           easing: 'ease-out-back',
        }
    );
  }


  render() {
    return (
      <>
      <div>
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1">MEET OUR TEAM</h5>
            <div className="row">
              {/* Team member 1*/}
              <div data-aos='zoom-out' className="col-sm-6">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className="img-fluid" src="/assets/img/headshots/devam.jpg" alt="card image" /></p>
                          <h4 className="card-title">Devam Sisodraker</h4>
                          <p className="card-text">I’m Devam, a second year Math & Computer Science student at UBC with a passion for software engineering.</p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">Ever since I was a toddler, I have been passionate about technology. I want to make the world as passionate about technology as I am by showing people how to use it to solve problems.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/d3vel0per/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://devam.io">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member 2 */}
              <div data-aos='zoom-out' className="col-sm-6">
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="/assets/img/headshots/vishal.jpg" alt="card image" /></p>
                          <h4 className="card-title">Vishal Desh</h4>
                          <p className="card-text">Hi, I am Vishal Desh currently pursuing Computer Science at UBC.</p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">I am passionate about robotics and software development to create a positive impact in the world. I aspire to start my own robotics company. </p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="mailto: emailtovishy@gmail.com">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="http://vishaldesh.com/">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team 3 */}
              <div data-aos='zoom-out' className="col-sm-6">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="/assets/img/headshots/eli.jpg" alt="card image" /></p>
                          <h4 className="card-title">Eli Vlahos</h4>
                          <p className="card-text">University of Waterloo Electrical Engineer 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">Interested in software and its applications in finance</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/eli-vlahos-21683111a/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://elidaboss01.github.io/">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member  */}
              <div data-aos='zoom-out' className="col-sm-6">
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className="img-fluid" src="/assets/img/headshots/aiden.jpg" alt="card image" /></p>
                          <h4 className="card-title">Aiden Kerr</h4>
                          <p className="card-text">Hey, I'm Aiden! I'm a Computer Science student at UBC</p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">I've been interested in technology and problem solving for as long as I can remember! Watching a project go from nothing to complete is always a joy.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/aidenkerr/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://github.com/AidenKerr">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      </>
    );
  }

}

export default AboutUsPage;