import PropTypes from "prop-types";

function HeaderSec({
  setModal,
  setAddModalType,
  headerText,
  buttonText,
  modalForAdd,
  buttonDisplay,
}) {
  return (
    <div className="w-full flex justify-between items-center my-8">
      <p className="text-3xl font-bold">{headerText}</p>
      <button
        onClick={() => {
          setModal(true), setAddModalType(modalForAdd);
        }}
        className="py-2 px-4 rounded-md bg-black text-white"
        style={{ display: `${buttonDisplay}` }}
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
  setaddModalType: PropTypes.func,
  modalForAdd: PropTypes.string,
  buttonDisplay: PropTypes.string,
};

export default HeaderSec;
