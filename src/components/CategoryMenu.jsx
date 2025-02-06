import React from "react";

const CategoryMenu = () => {
  const categoryItem = [
    { id: 1, name: "dinner", icon: "icon" },
    { id: 2, name: "breakfast", icon: "icon" },
    { id: 3, name: "lunch", icon: "icon" },
    { id: 4, name: "snack", icon: "icon" },
  ];
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          className={`px-3 py-2 bg-gray-200 font-normal rounded-lg hover:bg-green-500 hover:text-white `}
        >
          All
        </button>
        {categoryItem.map((category, index) => {
          return (
            <button
              key={index}
              className={`px-3 py-2 bg-gray-200 font-normal rounded-lg hover:bg-green-500 hover:text-white  `}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
