import { useState } from "react";
import IconCancel from "./icon/IconCancel";
import Data from "../assets/data.json";

// eslint-disable-next-line react/prop-types
function AddModal({ modal, setModal, closeModal, addModalType }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxSpend, setMaxSpend] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <div
      className={`fixed top-0 z-20 bg-black/70 w-full h-screen justify-center items-center ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {addModalType === "budget" ? "Add New Budget" : "Add New Pot"}
          </p>
          <IconCancel onClick={closeModal} />
        </div>
        <p className="text-zinc-600">
          {addModalType === "budget"
            ? "Choose a category to set a spending budget. These categories can help you monitor spending."
            : "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."}
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">
              {addModalType === "pots" ? "Pot Name" : "Budget Category"}
            </p>
            {addModalType === "pots" ? (
              <div className="w-full border border-black h-10 rounded-md py-1 px-5">
                <input type="text" className="w-full h-full outline-none" />
              </div>
            ) : (
              <select
                className="w-full border border-black h-10 rounded-md py-1 px-5"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled>
                  {addModalType === "budget" ? "Select a Category" : ""}
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
                {addModalType === "budget" || addModalType === "pots"
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
              setModal(false);
            }}
            className="bg-zinc-900 w-full p-3 rounded-md font-semibold text-zinc-200"
          >
            {addModalType === "budget" ? "Add Budget" : "Add Pots"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
