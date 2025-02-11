import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IconCancel from "./icon/IconCancel";
import Data from "../utils/data.json";

function ModalEdit({
  addModalEdit,
  setAddModalEdit,
  ModalEditType,
  closeModal,
  budgetToEdit,
  addModalType,
  potsToEdit,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxSpend, setMaxSpend] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  const [selectedName, setSelectedName] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");

  useEffect(() => {
    if (ModalEditType === "budgets" && budgetToEdit) {
      setSelectedCategory(budgetToEdit.category);
      setMaxSpend(budgetToEdit.maximum);
      setSelectedTheme(budgetToEdit.theme);
    } else if (ModalEditType === "pots" && potsToEdit) {
      setSelectedName(potsToEdit.name);
      setSelectedTarget(potsToEdit.target);
      setSelectedTheme(potsToEdit.theme);
    }
  }, [ModalEditType, budgetToEdit, potsToEdit]);

  return (
    <div
      className={`fixed top-0 z-20 bg-black/70 w-full h-screen justify-center items-center ${
        addModalEdit ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {ModalEditType === "pots" ? "Edit Pots" : "Edit Budget"}
          </p>
          <IconCancel onClick={closeModal} />
        </div>
        <p className="text-zinc-600">
          {ModalEditType === "budgets"
            ? "As your budgets change, feel free to update your spending limits."
            : "If your saving targets change, feel free to update your pots"}
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">
              {ModalEditType === "pots" ? "Pot Name" : "Budget Category"}
            </p>
            {ModalEditType === "pots" ? (
              <div className="w-full border border-black h-10 rounded-md py-1 px-5">
                <input
                  type="text"
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                  className="w-full h-full outline-none"
                />
              </div>
            ) : (
              <select
                className="w-full border border-black h-10 rounded-md py-1 px-5"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled>
                  {ModalEditType === "budgets" ? "Select a Category" : ""}
                </option>
                {Data.budgets.map((b, index) => (
                  <option key={index} value={b.category}>
                    {b.category}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">
              {ModalEditType === "budgets" ? "Maximum Spend" : "Target"}
            </p>
            <div className="w-full border border-black h-10 rounded-md py-1 px-5 flex">
              <input type="text" disabled placeholder="$" className="w-3" />
              <input
                type="number"
                className="text-xl flex-grow outline-none px-2"
                value={ModalEditType === "budgets" ? maxSpend : selectedTarget}
                onChange={(e) =>
                  ModalEditType === "budgets"
                    ? setMaxSpend(e.target.value)
                    : setSelectedTarget(e.target.value)
                }
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
                {ModalEditType === "budgets" || addModalType === "pots"
                  ? "Select a Theme"
                  : ""}
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
              setAddModalEdit(false);
            }}
            className="bg-zinc-900 w-full p-3 rounded-md font-semibold text-zinc-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

ModalEdit.propTypes = {
  addModalEdit: PropTypes.bool,
  setAddModalEdit: PropTypes.func,
  ModalEditType: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  budgetToEdit: PropTypes.object,
  addModalType: PropTypes.string,
  potsToEdit: PropTypes.object,
};

export default ModalEdit;
