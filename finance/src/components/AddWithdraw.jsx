import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IconCancel from "./icon/IconCancel";

function AddWithdraw({
  addWithdrawModal,
  setAddWithdrawModal,
  closeModal,
  buttonFor,
  selectedPots,
}) {
  const [inputValue, setInputValue] = useState(""); // Fix: Destructure useState properly
  const [newTotal, setNewTotal] = useState(0); // Add state for new total

  useEffect(() => {
    if (selectedPots) {
      setNewTotal(selectedPots.total || 0);
      setInputValue("");
    }
  }, [selectedPots]);

  if (!selectedPots) return null;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Calculate new total based on input
    if (value === "") {
      setNewTotal(selectedPots.total);
    } else {
      const numericValue = parseFloat(value) || 0;
      const updatedTotal =
        buttonFor === "add"
          ? selectedPots.total + numericValue
          : Math.max(selectedPots.total - numericValue, 0);
      setNewTotal(updatedTotal);
    }
  };

  return (
    <div
      className={`fixed top-0 z-20 bg-black/70 w-full h-screen justify-center items-center p-5 ${
        addWithdrawModal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {buttonFor === "add"
              ? `Add to '${selectedPots.name}'`
              : `Withdraw from '${selectedPots.name}'`}
          </p>
          <IconCancel onClick={closeModal} />
        </div>
        <p className="text-zinc-600">
          {buttonFor === "add"
            ? "As your budgets change, feel free to update your spending limits."
            : "If your saving targets change, feel free to update your pots"}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-zinc-500 font-semibold">New Amount</p>
            <p className="text-3xl text-black font-bold">
              ${newTotal.toFixed(2)}
            </p>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden bg-zinc-100">
            <div
              className="h-full"
              style={{
                width: `${(selectedPots.total / selectedPots.target) * 100}%`,
                backgroundColor: selectedPots.theme,
              }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-green-600 font-semibold">
              {((selectedPots.total / selectedPots.target) * 100).toFixed(2)}%
            </p>
            <p className="font-semibold text-zinc-500 text-sm">
              Target of ${selectedPots.target.toLocaleString()}
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-zinc-500 text-sm mb-1">
            {buttonFor === "add" ? "Amount to Add" : "Amount to Withdraw"}
          </p>
          <div className="w-full border border-black h-10 rounded-md py-1 px-5 flex">
            <input type="text" disabled placeholder="$" className="w-3" />
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full h-full outline-none px-2 font-semibold"
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setAddWithdrawModal(false);
            }}
            className="bg-zinc-900 w-full p-3 rounded-md font-semibold text-zinc-200"
          >
            {buttonFor === "add" ? "Confirm Addition" : "Confirm Withdrawal"}
          </button>
        </div>
      </div>
    </div>
  );
}

AddWithdraw.propTypes = {
  addWithdrawModal: PropTypes.bool.isRequired,
  setAddWithdrawModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  buttonFor: PropTypes.oneOf(["add", "withdraw"]),
  selectedPots: PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.number.isRequired,
    total: PropTypes.number,
    theme: PropTypes.string.isRequired,
  }),
  setSelectedPots: PropTypes.func.isRequired,
};

export default AddWithdraw;
