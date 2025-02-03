import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function MenuDropDown({
  setAddEditModal,
  setDeleteModal,
  setBudgetToEdit,
  index,
  b,
  dropdownType,
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (e, index) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleEditClick = (e, budget) => {
    e.stopPropagation();
    setActiveDropdown(null); // Close dropdown
    setBudgetToEdit({
      category: budget.category,
      maximum: budget.maximum,
      theme: budget.theme,
    });
    setAddEditModal(true); // Open modal
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setActiveDropdown(null); // Close dropdown
    setDeleteModal(true); // Open delete modal
  };

  return (
    <div ref={dropdownRef} className="relative">
      <p
        onClick={(e) => toggleDropdown(e, index)}
        className="cursor-pointer px-2"
      >
        ...
      </p>

      <div
        className={`absolute top-6 right-5 w-36 flex flex-col justify-center items-center bg-zinc-700/10 p-2 rounded-lg backdrop-blur-sm font-semibold transition-all duration-300 ${
          activeDropdown === index ? "h-24 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <p
          onClick={(e) => handleEditClick(e, b)}
          className="cursor-pointer w-full text-center hover:bg-zinc-200 rounded py-1"
        >
          {dropdownType === "pots" ? "Edit Pots" : "Edit Budget"}
        </p>
        <hr className="w-full border-0.5 border-zinc-300 my-2" />
        <p
          onClick={handleDeleteClick}
          className="cursor-pointer w-full text-center text-red-500 hover:bg-zinc-200 rounded py-1"
        >
          {dropdownType === "pots" ? "Delete Pots" : "Delete Budget"}
        </p>
      </div>
    </div>
  );
}

MenuDropDown.propTypes = {
  setAddEditModal: PropTypes.func,
  setDeleteModal: PropTypes.func,
  setBudgetToEdit: PropTypes.func,
  index: PropTypes.any,
  b: PropTypes.any,
  dropdownType: PropTypes.string,
};

export default MenuDropDown;
