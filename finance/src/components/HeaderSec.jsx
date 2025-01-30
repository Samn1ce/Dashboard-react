import PropTypes from "prop-types";

function HeaderSec({
  setModal,
  // setNewBudgetModal,
  headerText,
  buttonText,
  // setNewPots,
  setModalType,
  modalFor,
}) {
  return (
    <div className="w-full flex justify-between items-center my-8">
      <p className="text-3xl font-bold">{headerText}</p>
      <button
        // onClick={() => {
        //   setModal(true), setNewBudgetModal(true), setNewPots(true);
        // }}
        onClick={() => {
          setModal(true), setModalType(modalFor);
        }}
        className="py-2 px-4 rounded-md bg-black text-white"
      >
        {buttonText}
      </button>
    </div>
  );
}

HeaderSec.propTypes = {
  setModal: PropTypes.func,
  headerText: PropTypes.string,
  buttonText: PropTypes.string,
  setModalType: PropTypes.func,
  modalFor: PropTypes.func,
};

export default HeaderSec;
