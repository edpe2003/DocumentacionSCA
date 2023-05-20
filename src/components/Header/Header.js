import "../../styles/Header.css";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { BsList } from "react-icons/bs";

const SidebarInformation = require("../../database/sidebar.json");

function Header() {
  const [showSideBar, setSideBarState] = useState(false);

  // Initialize function
  useEffect(() => {}, []);

  const handleClickHeaderBtn = (showSideBar) => {
    setSideBarState(showSideBar ? false : true);
  };

  return (
    <div>
      <div className="header-bar">
        <BsList
          onClick={() => {
            handleClickHeaderBtn(showSideBar);
          }}
        />
        <p>Documentacion SCA</p>
      </div>
      {showSideBar ? (
        <div className="all-categories">
          {SidebarInformation.sidebarComponent.map((item, index) => (
            <Category key={index} item={item} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
