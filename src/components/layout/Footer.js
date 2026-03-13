import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaSpotify,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer py-5">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                        <p className="footer-title mb-2">Phillip Harden</p>
                        <p className="footer-text mb-0">
                            © {currentYear} Phillip Harden. All rights reserved.
                        </p>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-wrap justify-content-lg-end gap-2">
                            <a
                                href="https://github.com/phillipharden"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/phillipharden/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="https://www.facebook.com/SpiritPhild/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/spiritphild/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.tiktok.com/@spiritphild"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="TikTok"
                            >
                                <FaTiktok />
                            </a>

                            <a
                                href="https://www.youtube.com/@Spirit-Phild"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>

                            <a
                                href="https://open.spotify.com/user/kw1mvjf3tz4c3k0azfw3j6zzr?si=OjOS4UhYRK2lbflYVVNUHg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="Spotify"
                            >
                                <FaSpotify />
                            </a>

                            <a
                                href="mailto:hello@phillipharden.com"
                                className="footer-social"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;