import IconCancel from "./icon/IconCancel";

// eslint-disable-next-line react/prop-types
function AddWithdraw({ addWithdrawModal, setAddWithdrawModal, closeModal }) {
  return (
    <div
      className={`fixed top-0 z-20 bg-black/70 w-full h-screen justify-center items-center ${
        addWithdrawModal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {addWithdrawModal === "add"
              ? "Add to 'Savings"
              : "Withdraw from 'Savings"}
          </p>
          <IconCancel onClick={closeModal} />
        </div>
        <p className="text-zinc-600">
          {addWithdrawModal === "add"
            ? "As your budgets change, feel free to update your spending limits."
            : "If your saving targets change, feel free to update your pots"}
        </p>
        <div>
          <button
            onClick={() => {
              setAddWithdrawModal(false);
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

export default AddWithdraw;
