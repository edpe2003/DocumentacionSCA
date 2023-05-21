import "../../styles/Header.css";
import React, { useEffect, useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

function Category(props) {
  const [showSubcategory, setSubcategoryState] = useState(false);
  const categoryInformation = props.item;
  // Initialize function
  useEffect(() => {}, []);

  const handleClickSubCategory = (showSubcategory) => {
    setSubcategoryState(showSubcategory ? false : true);
  };

  const handleClickCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="block-category">
      <div className="category">
        <p
          onClick={() => {
            handleClickCategory(categoryInformation.id);
          }}
        >
          {categoryInformation.name}{" "}
        </p>{" "}
        {categoryInformation.subcategory ? (
          <div
            onClick={() => {
              handleClickSubCategory(showSubcategory);
            }}
          >
            {showSubcategory ? (
              <BsArrowDownCircle className="rotate-category" />
            ) : (
              <BsArrowDownCircle />
            )}{" "}
          </div>
        ) : (
          <> </>
        )}{" "}
      </div>{" "}
      {showSubcategory ? (
        <div className="subcategories">
          {" "}
          {categoryInformation.subcategory.map((item, index) => (
            <div
              key={index}
              className="sub-category"
              onClick={() => {
                handleClickCategory(item.id);
              }}
            >
              <p> {item.name} </p>{" "}
            </div>
          ))}{" "}
        </div>
      ) : (
        <> </>
      )}{" "}
    </div>
  );
}

export default Category;
