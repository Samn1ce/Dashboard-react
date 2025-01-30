// eslint-disable-next-line react/prop-types
function MenuDropDown({
  handleDeleteClick,
  handleEditClick,
  activeDropdown,
  index,
  budget,
}) {
  return (
    <div
      className={`absolute top-6 right-5 w-36 flex flex-col justify-center items-center bg-zinc-700/10 p-2 rounded-lg backdrop-blur-sm font-semibold transition-all duration-300 ${
        activeDropdown === index ? "h-24 opacity-100" : "h-0 opacity-0"
      }`}
    >
      <p
        onClick={(e) => handleEditClick(e, budget)}
        className="cursor-pointer w-full text-center hover:bg-zinc-200 rounded py-1"
      >
        Edit Budget
      </p>
      <hr className="w-full border-0.5 border-zinc-300 my-2" />
      <p
        onClick={handleDeleteClick}
        className="cursor-pointer w-full text-center text-red-500 hover:bg-zinc-200 rounded py-1"
      >
        Delete Budget
      </p>
    </div>
  );
}

export default MenuDropDown;
