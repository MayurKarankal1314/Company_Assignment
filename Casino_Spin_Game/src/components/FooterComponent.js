import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(

        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/menu">Casino Game</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Plot No. 119 "Vivek Niwas"<br />
		              Saraswati Colony, Kannad Tq-Kannad<br />
		              Dist- Aurangabad<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 7276762302<br />
                            <i className="fa fa-fax fa-lg"></i>: +91 28765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <Link to="mailto:mayur.karankal6@gmail.com">
                                mayur.karankal6@gmail.com</Link>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" to="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>?? Copyright 2021 Mayur Sharadrao Karankal</p>
                    </div>
                </div>
            </div>
        </div>    

    );
}

export default Footer;