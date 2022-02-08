import React, { useEffect, useState } from 'react'; //rfce 단축키로 양식 가져오는거 연습
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);

            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);



    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div>
                <img className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                    alt="netflix logo"

                />

                <img className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="netflix avatar"
                />

            </div>
        </div>
    );
}

export default Nav;
