import IconCancel from "./icon/IconCancel";

// eslint-disable-next-line react/prop-types
function DeleteBudget({ deleteModal, setDeleteModal }) {
  return (
    <div
      className={`fixed top-0 z-20 bg-black/70 w-full h-screen justify-center items-center ${
        deleteModal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">Delete Entertainment</p>
          <IconCancel onClick={() => setDeleteModal(false)} />
        </div>
        <p className="text-zinc-600">
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever
        </p>
        <div>
          <button
            onClick={() => setDeleteModal(false)}
            className="bg-red-500 w-full p-3 rounded-md font-semibold text-zinc-50"
          >
            Yes, Confirm Deletion
          </button>
          <button
            onClick={() => setDeleteModal(false)}
            className="w-full p-3 rounded-md font-semibold text-zinc-800"
          >
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBudget;
