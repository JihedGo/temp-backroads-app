import {  socialLinks } from '../data'
import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
export default function Navbar() {
    return (<nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <PageLinks parentClass="nav-links" itemClass="nav-link" />

                <ul className="nav-icons">
                    {socialLinks.map((link) => (
                        <li key={link.id}>
                            <a  rel="noreferrer" href={link.href} target="_blank" className="nav-icon">
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>)
}

