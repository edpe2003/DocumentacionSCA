import "../../styles/Header.css";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { BsList, BsSearch } from "react-icons/bs";

function Header() {
  const [showSideBar, setSideBarState] = useState(false);
  const [SidebarInformation, setSidebarInformation] = useState(
    require("../../database/sidebar.json")
  );

  // Initialize function
  useEffect(() => {}, []);

  const handleClickHeaderBtn = (showSideBar) => {
    setSideBarState(showSideBar ? false : true);
    setSidebarInformation(require("../../database/sidebar.json"));
  };

  function filterSubCategories(subcategory, text) {
    if (!subcategory) return false;
    return subcategory.some((sub) => {
      return sub.name.toLowerCase().includes(text);
    });
  }

  function getFilterCategories(text) {
    let allCategories = require("../../database/sidebar.json");
    let response = allCategories.sidebarComponent.filter((cat) => {
      return (
        cat.name.toLowerCase().includes(text) ||
        filterSubCategories(cat.subcategory, text)
      );
    });
    return { sidebarComponent: response };
  }

  const changeCategorySearch = (e) => {
    let text = e.target.value;
    setSidebarInformation(getFilterCategories(text.toLowerCase()));
  };

  return (
    <div>
      <div className="header-bar">
        <div
          className="header-btn"
          onClick={() => {
            handleClickHeaderBtn(showSideBar);
          }}
        >
          <BsList />
        </div>
        <p> Documentacion SCA </p>{" "}
      </div>{" "}
      {showSideBar ? (
        <div className="all-categories">
          <div className="block-category search-container">
            <input type="text" onChange={changeCategorySearch} />
            <BsSearch className="search-btn" />
          </div>
          {SidebarInformation.sidebarComponent.map((item, index) => (
            <Category key={index} item={item} />
          ))}{" "}
        </div>
      ) : (
        <> </>
      )}{" "}
    </div>
  );
}

export default Header;
