import PropTypes from "prop-types";
import IconCancel from "./icon/IconCancel";
import Data from "../assets/data.json";
import { useState, useEffect } from "react";

function NewBudget({
  modal,
  setmodal,
  newBudgetModal,
  closeModal,
  budgetToEdit,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxSpend, setMaxSpend] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  // Set the form values when editing
  useEffect(() => {
    if (!newBudgetModal && budgetToEdit) {
      setSelectedCategory(budgetToEdit.category);
      setMaxSpend(budgetToEdit.maximum);
      setSelectedTheme(budgetToEdit.theme);
    } else {
      // Reset form when adding new budget
      setSelectedCategory("");
      setMaxSpend("");
      setSelectedTheme("");
    }
  }, [newBudgetModal, budgetToEdit, modal]);

  return (
    <div
      className={`fixed top-0 z-20 bg-black/70 w-full h-screen justify-center items-center ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {newBudgetModal ? "Add New Budget" : "Edit Budget"}
          </p>
          <IconCancel onClick={() => closeModal(false)} />
        </div>
        <p className="text-zinc-600">
          {newBudgetModal
            ? "Choose a category to set a spending budget. These categories can help you monitor spending."
            : "As your budgets change, feel free to update your spending limits."}
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">
              Budget Category
            </p>
            <select
              className="w-full border border-black h-10 rounded-md py-1 px-5"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>
                {newBudgetModal ? "Select a Category" : ""}
              </option>
              {Data.budgets.map((b, index) => (
                <option key={index} value={b.category}>
                  {b.category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">Maximum Spend</p>
            <div className="w-full border border-black h-10 rounded-md py-1 px-5 flex">
              <input type="text" disabled placeholder="$" className="w-3" />
              <input
                type="number"
                className="text-xl flex-grow outline-none px-2"
                value={maxSpend}
                onChange={(e) => setMaxSpend(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">Theme</p>
            <select
              className="w-full border border-black h-10 rounded-md py-1 px-5"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              <option value="" disabled>
                {newBudgetModal ? "Select a Theme" : ""}
              </option>
              {Data.budgets.map((b, index) => (
                <option key={index} value={b.theme} className="text-xl flex">
                  {b.theme}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => {
              // Add your save/update logic here
              setmodal(false);
            }}
            className="bg-zinc-900 w-full p-3 rounded-md font-semibold text-zinc-200"
          >
            {newBudgetModal ? "Add Budget" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

NewBudget.propTypes = {
  modal: PropTypes.boolean.isRequired,
  setmodal: PropTypes.boolean.isRequired,
  newBudgetModal: PropTypes.boolean.isRequired,
  closeModal: PropTypes.boolean.isRequired,
  budgetToEdit: PropTypes.boolean.isRequired,
};

export default NewBudget;
