import React, { useState } from "react";
import "./headerAssets/Header.css";
import { useMediaQuery } from "react-responsive";
import headerLogo from "./headerAssets/header_logo.png";
import headerHeart from "./headerAssets/header_heart.svg";
import headerSearch from "./headerAssets/header_search.svg";
import headerSearchMobile from "./headerAssets/header_search_mobile.svg";
import headerLogoMobile from "./headerAssets/header_logo_mobile.png";
import headerBurger from "./headerAssets/header_burger.svg";
import headerCloseMobile from "./headerAssets/header_close_mobile.svg";
import headerBackMobile from "./headerAssets/header_backarrow_mobile.svg";

const Header = (props) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [subMenuOpened, setSubMenuOpened] = useState(false);
    const [searchOpened, setSearchOpened] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 940px)" });
    return (
        <header className="header">
            <div className="header-container">
                {/* BURGER */}
                {isMobile && (
                    <button
                        onClick={() => {
                            setMenuOpened(true);
                        }}
                    >
                        <img src={headerBurger} alt="menu" />
                    </button>
                )}

                {/* LOGO */}
                <a href="#" className="header__logo">
                    <img
                        src={isMobile ? headerLogoMobile : headerLogo}
                        alt="Khaby"
                    />
                </a>

                {/* NAVIGTION */}
                <nav
                    className={
                        !isMobile
                            ? "header-menu"
                            : !menuOpened
                            ? "header-menu"
                            : "header-menu opened"
                    }
                >
                    {!subMenuOpened && isMobile && (
                        <button
                            onClick={() => {
                                setMenuOpened(false);
                            }}
                            className="header-menu-list-mobile__close"
                        >
                            <img src={headerCloseMobile} alt="close" />
                        </button>
                    )}
                    <ul className="header-menu-list">
                        <li
                            onClick={() => {
                                if (!subMenuOpened) {
                                    setSubMenuOpened(true);
                                }
                            }}
                        >
                            <a href="#" className="header-menu-list__item">
                                каталог
                            </a>

                            <ul
                                className={
                                    !isMobile
                                        ? "header-menu-list-dropdown"
                                        : !subMenuOpened
                                        ? "header-menu-list-dropdown-mobile"
                                        : "header-menu-list-dropdown-mobile opened"
                                }
                            >
                                {subMenuOpened && isMobile && (
                                    <button
                                        onClick={() => {
                                            setSubMenuOpened(false);
                                        }}
                                        className="header-menu-list-dropdown-mobile__close"
                                    >
                                        <img
                                            src={headerBackMobile}
                                            alt="close"
                                        />
                                    </button>
                                )}
                                <li className="header-menu-list-dropdown__item">
                                    <a href="#">штани</a>
                                </li>
                                <li className="header-menu-list-dropdown__item">
                                    <a href="#">сорочки</a>
                                </li>
                                <li className="header-menu-list-dropdown__item">
                                    <a href="#">сукні</a>
                                </li>
                                <li className="header-menu-list-dropdown__item">
                                    <a href="#">сведри</a>
                                </li>
                                <li className="header-menu-list-dropdown__item">
                                    <a href="#">костюми</a>
                                </li>
                                <li className="header-menu-list-dropdown__item">
                                    <a href="#">піджаки</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="header-menu-list__item">
                                про нас
                            </a>
                        </li>
                        <li>
                            <a href="#" className="header-menu-list__item">
                                оплата і доставка
                            </a>
                        </li>
                        <li>
                            <a href="#" className="header-menu-list__item">
                                lookbook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="header-menu-list__item">
                                контакти
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-right-block">
                    {/* LIKES */}
                    <button className="header-right-block__likes">
                        <div className="header-right-block__likes-counter">
                            1
                        </div>
                        <img src={headerHeart} alt="like" />
                    </button>

                    {/* SEARCH */}
                    {!isMobile ? (
                        <div className="header-right-block__search">
                            <a href="#">
                                <img src={headerSearch} alt="search" />
                            </a>
                            <input type="text" placeholder="Пошук" />
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                setSearchOpened(!searchOpened);
                            }}
                        >
                            <img src={headerSearchMobile} alt="search" />
                        </button>
                    )}
                </div>
                {isMobile && searchOpened && (
                    <div className="header-right-block__search">
                        <a href="#">
                            <img src={headerSearch} alt="search" />
                        </a>
                        <input type="text" placeholder="Пошук" />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
