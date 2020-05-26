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
import { Link } from "react-router-dom";
import {
  getHomePageUrl,
  getCategoriesMenuData,
  getMainMenuData,
} from "./configuration";

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
        <Link className="header__logo" to={getHomePageUrl()}>
          <img src={isMobile ? headerLogoMobile : headerLogo} alt="Khaby" />
        </Link>

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
            {/* MAIN MENU FIRST ITEM */}
            <li
              onClick={() => {
                if (!subMenuOpened) {
                  setSubMenuOpened(true);
                }
              }}
            >
              <Link
                className="header-menu-list__item"
                to={getMainMenuData()[0].url}
                key={0}
              >
                {getMainMenuData()[0].title}
              </Link>

              {/* SUB MENU LIST */}
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
                    <img src={headerBackMobile} alt="close" />
                  </button>
                )}
                {/* SUB MENU LIST ITEMS */}
                {getCategoriesMenuData().map((item, index) => (
                  <li className="header-menu-list-dropdown__item">
                    <Link
                      to={item.url}
                      key={index}
                      onClick={() => {
                        setMenuOpened(false);
                        setSubMenuOpened(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* MAIN MENU OTHER LIST ITEMS */}
            {getMainMenuData().map((item, index) => {
              if (index > 0) {
                return (
                  <li>
                    <Link
                      className="header-menu-list__item"
                      to={item.url}
                      key={index}
                      onClick={() => {
                        setMenuOpened(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>

        <div className="header-right-block">
          {/* LIKES */}
          <button className="header-right-block__likes">
            <div className="header-right-block__likes-counter">1</div>
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
