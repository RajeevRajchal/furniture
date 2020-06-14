import React from 'react'

const Footer = () => {
    return (
        <footer className="d-flex">
            <div className="footer-col flex-2">
                <div className="footer-logo bold">
                    <img src="" alt="WoodLand"/>
                </div>
                <div className="app-available">
                    <h5>App Available soon on</h5>
                    <div className="icons">
                        <i className="material-icons">dashboard</i>
                        <i className="material-icons">dashboard</i>
                    </div>
                </div>
            </div>
            <div className="footer-col flex-2">
                <div className="footer-item bold">Information</div>
                <div className="footer-item">Home</div>
                <div className="footer-item">Who we</div>
                <div className="footer-item">Accesories</div>
                <div className="footer-item">Know Woods</div>
            </div>
            <div className="footer-col flex-2">
                <div className="footer-item bold">Shop Now</div>
            </div>
            <div className="footer-col flex-2">
                <div className="footer-item bold">Help and Support</div>
                <div className="footer-item">FAQs</div>
                <div className="footer-item">Help</div>
                <div className="footer-item">Contacts</div>
                <div className="footer-item">Term and Policies</div>
            </div>
            <div className="footer-col flex-2">
                <div className="footer-item bold text-right">Connect with us</div>
                <div className="contact-details text-right d-flex align-end flex-column">
                    <div className="contact-detail d-flex items-center">
                        <label>+977 9860116323</label>
                        <i className="material-icons">phone</i>
                    </div>
                    <div className="contact-detail d-flex items-center">
                        <label>Kathmandu, Nepal</label>
                        <i className="material-icons">room</i>
                    </div>
                    <div className="contact-detail d-flex items-center">
                        <label>contact@woodland.com</label>
                        <i className="material-icons">mail</i>
                    </div>
                </div>
                <div className="footer-social-icons d-flex d-flex justify-end">
                    <i class="fa fa-facebook-square social-icon" aria-hidden="true"></i>
                    <i class="fa fa-instagram social-icon" aria-hidden="true"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
