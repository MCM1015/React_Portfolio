import React from 'react';
import github from '../images/github.png';
import Linkedin from '../images/Linkedin.png';
import stackoverflow from '../images/stackoverflow.png';

export default function Footer() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg w-full d-flex justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item foot bg-light">
                        <a className="nav-link" href="https://www.linkedin.com/in/mary-mcclernan1015"
                            target="_blank" rel="noreferrer"><img src={Linkedin} alt="LinkedIn" className="icon"/></a>
                    </li>
                    <li className="nav-item foot bg-light">
                        <a className="nav-link" href="https://github.com/MCM1015/" target="_blank" rel="noreferrer"><img src={github} alt="Github" className="icon"/></a>
                    </li>
                    <li className="nav-item foot bg-light">
                        <a className="nav-link" href="https://stackoverflow.com/users/14839222/mcm1015?tab=profile" target="_blank" rel="noreferrer"><img src={stackoverflow} alt="Stack OverFlow" className="icon"/></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}