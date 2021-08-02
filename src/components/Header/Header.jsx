import React from "react";

function Header() {
    return (
        <header className="banner">
            <div className="banner__contents">
                <h1 className="banner__title">Spider-Man: Into the Spider-Verse</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );  
}

export default Header;
